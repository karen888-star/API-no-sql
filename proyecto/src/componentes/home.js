export default async function mostrarHome() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1 style="text-align: center; font-family: 'Georgia', serif; color: #6a0dad; font-size: 2.5rem;">🎬 Harry Potter Movies</h1>
    <div id="lista" class="lista-peliculas"></div>
  `;

  const lista = document.getElementById("lista");

  try {
    const res = await fetch("https://api.potterdb.com/v1/movies");
    const json = await res.json();
    const movies = json.data;

    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "tarjeta-pelicula";

      const img = movie.attributes.poster || "https://via.placeholder.com/200x300?text=No+Image";

      card.innerHTML = `
        <img src="${img}" alt="${movie.attributes.title}" />
        <h2>${movie.attributes.title}</h2>
        <p>📅 ${movie.attributes.release_date || "Unknown"}</p>
        <p>⭐ ${movie.attributes.rating || "Not Rated"}</p>
        <p>⏱ ${movie.attributes.running_time || "???"} minutes</p>
      `;

      lista.appendChild(card);
    });
  } catch (error) {
    app.innerHTML = `<p style="color: red;">Error al cargar las películas: ${error.message}</p>`;
  }
}