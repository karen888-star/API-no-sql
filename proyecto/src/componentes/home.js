export default async function mostrarHome() {
  const app = document.getElementById("app");

  // Estilo general
  app.innerHTML = `
    <h1 style="text-align: center; font-family: 'Georgia', serif; color: #6a0dad; font-size: 2.5rem;">🎬 Harry Potter Movies</h1>
    <div id="lista" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; padding: 20px;"></div>
  `;

  const lista = document.getElementById("lista");

  try {
    const res = await fetch("https://api.potterdb.com/v1/");
    
    const json = await res.json();
    const movies = json.data;

    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.style = `
        background-color: #1c1c1c;
        color: white;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #6a0dad;
        box-shadow: 0 0 10px rgba(106, 13, 173, 0.5);
        font-family: 'Arial', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
      `;

      const img = movie.attributes.poster || "https://via.placeholder.com/200x300?text=No+Image";

      card.innerHTML = `
        <img src="${img}" alt="${movie.attributes.title}" style="width: 200px; height: auto; border-radius: 8px; margin-bottom: 10px;" />
        <h2 style="font-family: 'Georgia', serif; font-size: 1.2rem; color: #ffcc00; text-align: center;">${movie.attributes.title}</h2>
        <p>📅 ${movie.attributes.release_date || "Unknown"}</p>
        <p>⭐ ${movie.attributes.rating || "Not Rated"}</p>
        <p>⏱ ${movie.attributes.running_time || "???"} minutes</p>
        <button style="margin-top: 10px; padding: 8px 12px; background-color: #ff00cc; color: white; border: none; border-radius: 5px; cursor: pointer;">View Movie</button>
      `;

      lista.appendChild(card);
    });
  } catch (error) {
    app.innerHTML = `<p style="color: red;">Error loading movies: ${error.message}</p>`;
  }
}
