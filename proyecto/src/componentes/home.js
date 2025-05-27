export default async function mostrarPeliculas() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h2 style="text-align: center; color: #5A2A83;">Películas de Harry Potter</h2>
    <div id="lista" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; padding: 20px;"></div>
  `;

  const lista = document.getElementById("lista");

  try {
    const res = await fetch("https://api.potterdb.com/v1/movies");
    const json = await res.json();
    const peliculas = json.data;

    peliculas.forEach((pelicula) => {
      const item = document.createElement("div");
      item.style.border = "1px solid #ccc";
      item.style.padding = "10px";
      item.style.borderRadius = "10px";
      item.style.backgroundColor = "#f9f4ff";
      item.style.width = "200px";
      item.style.textAlign = "center";

      const titulo = pelicula.attributes.title;
      const portada = pelicula.attributes.poster;

      item.innerHTML = `
        <h4 style="color: #4A148C;">${titulo}</h4>
        <img src="${portada}" alt="${titulo}" style="width: 150px; height: auto; border-radius: 8px;" />
      `;

      lista.appendChild(item);
    });

  } catch (error) {
    app.innerHTML = `<p style="color: red;">Error al cargar películas: ${error.message}</p>`;
  }
}
