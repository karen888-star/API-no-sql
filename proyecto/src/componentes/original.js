export default function iniciarJuegoOriginal() {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = ""; // Limpiar antes de empezar

  const firebaseConfig = {
  apiKey: "AIzaSyC4gnXGBu4DYmeaxLeE0Xmu6IuDyciyK_s",
  authDomain: "harrypoterapi.firebaseapp.com",
  projectId: "harrypoterapi",
  storageBucket: "harrypoterapi.appspot.com", // 🔧 corregido aquí
  messagingSenderId: "1089078510369",
  appId: "1:1089078510369:web:c72af065fed7505001f460",
  };

  const cargarFirebase = async () => {
    const load = src => new Promise(resolve => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      document.head.appendChild(s);
    });

    await load("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
    await load("https://www.gstatic.com/firebasejs/10.11.0/firebase-database-compat.js");

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    return firebase.database();
  };

  const preguntas = [
    { texto: "¿Te consideras valiente?", gryffindor: 1 },
    { texto: "¿Prefieres estudiar antes que pelear?", ravenclaw: 1 },
    { texto: "¿Te consideras ambicioso?", slytherin: 1 },
    { texto: "¿Te gusta ayudar a los demás?", hufflepuff: 1 },
    { texto: "¿Te arriesgarías por tus amigos?", gryffindor: 1 },
    { texto: "¿Eres muy curioso o curiosa?", ravenclaw: 1 },
    { texto: "¿Te interesa el poder?", slytherin: 1 },
    { texto: "¿Valoras la lealtad ante todo?", hufflepuff: 1 }
  ];

  // Paso 1: Preguntar nombre
  const formNombre = document.createElement("div");
  formNombre.innerHTML = `
    <h2>Bienvenido al test de Hogwarts 🧙‍♂️</h2>
    <label>¿Cuál es tu nombre?</label><br>
    <input type="text" id="nombreUsuario"><br>
    <button id="comenzarTest">Comenzar</button>
  `;
  contenido.appendChild(formNombre);

  document.getElementById("comenzarTest").onclick = async () => {
    const nombre = document.getElementById("nombreUsuario").value.trim();
    if (!nombre) {
      alert("Por favor, escribe tu nombre.");
      return;
    }

    formNombre.remove(); // Ocultar nombre
    const respuestas = [];
    const puntajes = { gryffindor: 0, ravenclaw: 0, slytherin: 0, hufflepuff: 0 };

    let indice = 0;

    const mostrarPregunta = () => {
      contenido.innerHTML = `
        <h3>${preguntas[indice].texto}</h3>
        <button id="siBtn">Sí</button>
        <button id="noBtn">No</button>
      `;

      document.getElementById("siBtn").onclick = () => {
        const p = preguntas[indice];
        for (let casa in p) {
          if (casa !== "texto") {
            puntajes[casa] += p[casa];
          }
        }
        avanzar();
      };

      document.getElementById("noBtn").onclick = avanzar;
    };

    const avanzar = () => {
      indice++;
      if (indice < preguntas.length) {
        mostrarPregunta();
      } else {
        finalizarTest();
      }
    };

    const finalizarTest = async () => {
      const casaGanadora = Object.keys(puntajes).reduce((a, b) =>
        puntajes[a] > puntajes[b] ? a : b
      );

      contenido.innerHTML = `
        <h2>¡Felicidades, ${nombre}!</h2>
        <p>Tu casa de Hogwarts es <strong>${casaGanadora.toUpperCase()}</strong> 🏰</p>
      `;

      const db = await cargarFirebase();
      const id = Date.now();
      await db.ref('usuarios/' + id).set({
        nombre,
        casa: casaGanadora
      });
    };

    mostrarPregunta();
  };
}
