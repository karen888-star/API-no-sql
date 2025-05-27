document.addEventListener('DOMContentLoaded', function() {
    showMovies();
});
// fetch_hechizos.js

async function fetchSpells() {
    try {
        const response = await fetch('https://api.potterdb.com/v1/spells');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error al cargar los hechizos:', error);
        throw error;
    }
}

async function showSpells() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<p>Cargando hechizos...</p>';

    try {
        const spells = await fetchSpells();
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        spells.forEach(spell => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-content">
                    <h2>${spell.attributes.name || 'Hechizo Desconocido'}</h2>
                    <p class="spell-type">Tipo: ${spell.attributes.category || 'Desconocido'}</p>
                    <p class="spell-effect">Efecto: ${spell.attributes.effect || 'Desconocido'}</p>
                    ${spell.attributes.hand ? `<p class="spell-hand">Movimiento de varita: ${spell.attributes.hand}</p>` : ''}
                    ${spell.attributes.light ? `<p class="spell-light">Luz: ${spell.attributes.light}</p>` : ''}
                </div>
            `;
            gridContainer.appendChild(card);
        });

        mainContent.innerHTML = '';
        mainContent.appendChild(gridContainer);
    } catch (error) {
        mainContent.innerHTML = '<p>Error al cargar los hechizos</p>';
    }
}

// ==========================
// fetch_movies.js
// ==========================
async function fetchMovies() {
    try {
        const response = await fetch('https://api.potterdb.com/v1/movies');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error al cargar las películas:', error);
        throw error;
    }
}

async function showMovies() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<p>Cargando películas...</p>';
    try {
        const movies = await fetchMovies();
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'card movie-card';
            card.innerHTML = `
                <img src="${movie.attributes.poster || 'placeholder.jpg'}" alt="${movie.attributes.title}">
                <div class="card-content">
                    <h2>${movie.attributes.title || 'Título Desconocido'}</h2>
                    <p class="movie-release">Estreno: ${movie.attributes.release_date || 'Fecha desconocida'}</p>
                    <p class="movie-duration">Duración: ${movie.attributes.running_time || 'Desconocida'}</p>
                    <p class="movie-summary">${movie.attributes.summary || 'Sin resumen disponible'}</p>
                    <div class="movie-rating">
                        <span>★</span>
                        ${movie.attributes.rating || 'N/A'}
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });

        mainContent.innerHTML = '';
        mainContent.appendChild(gridContainer);
    } catch (error) {
        mainContent.innerHTML = '<p>Error al cargar las películas</p>';
    }
}

// ==========================
// fetch_books.js
// ==========================
async function fetchBooks() {
    try {
        const response = await fetch('https://api.potterdb.com/v1/books');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error al cargar los libros:', error);
        throw error;
    }
}

async function showBooks() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<p>Cargando libros...</p>';

    try {
        const books = await fetchBooks();
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'card book-card';
            card.innerHTML = `
                <img src="${book.attributes.cover || 'placeholder.jpg'}" alt="${book.attributes.title}">
                <div class="card-content">
                    <h2>${book.attributes.title || 'Título Desconocido'}</h2>
                    <p class="book-author">Autor: ${book.attributes.author || 'Desconocido'}</p>
                    <p class="book-release">Publicado: ${book.attributes.release_date || 'Fecha desconocida'}</p>
                    <p class="book-pages">Páginas: ${book.attributes.pages || 'Desconocido'}</p>
                    <p class="book-summary">${book.attributes.summary || 'Sin resumen disponible'}</p>
                    <div class="book-details">
                        <span class="book-order">Libro #${book.attributes.order || '?'}</span>
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });

        mainContent.innerHTML = '';
        mainContent.appendChild(gridContainer);
    } catch (error) {
        mainContent.innerHTML = '<p>Error al cargar los libros</p>';
    }
}

// ==========================
// fetch_characters.js
// ==========================
async function fetchCharacters() {
    try {
        const response = await fetch('https://api.potterdb.com/v1/characters');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
}

async function showCharacters() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '<p>Cargando personajes...</p>';

    try {
        const characters = await fetchCharacters();
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${character.attributes.image || 'placeholder.jpg'}" alt="${character.attributes.name}">
                <div class="card-content">
                    <h2>${character.attributes.name}</h2>
                    <p>${character.attributes.house || 'Casa desconocida'}</p>
                </div>
            `;
            gridContainer.appendChild(card);
        });

        mainContent.innerHTML = '';
        mainContent.appendChild(gridContainer);
    } catch (error) {
        mainContent.innerHTML = '<p>Error al cargar los personajes</p>';
    }
}

// ==========================
// fetch_profile.js
// ==========================
function showProfile() {
    const mainContent = document.getElementById('main-content');
    
    const profileContainer = document.createElement('div');
    profileContainer.className = 'profile-container';
    
    profileContainer.innerHTML = `
        <div class="profile-header">
            <h1>Potter API</h1>
            <h2>Created by KAREN SOFIA BORDA WHITE</h2>
        </div>
        
        <div class="profile-image">
            <img src="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/uor-wwohp-logo-3-kids-clouds-key-art-hero-b.jpg" alt="Potter DB Logo">
        </div>
        
        <div class="profile-description">
            <p>
                PotterDB es una API RESTful que proporciona datos extensivos sobre el universo 
                de Harry Potter, incluyendo información sobre personajes, libros, películas y hechizos. 
                Esta API es de uso gratuito y está diseñada para desarrolladores y fans 
                que deseen integrar datos de Harry Potter en sus aplicaciones.
            </p>
        </div>
        
        <div class="profile-footer">
            <a href="https://github.com/karen888-star" target="_blank">@karen8888-star</a>
            <span class="version">v1.0.1</span>
        </div>
    `;
    
    mainContent.innerHTML = '';
    mainContent.appendChild(profileContainer);
}

// ==========================
// search_script.js
// ==========================
async function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categorySelect').value;
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = '<p>Buscando...</p>';

    try {
        // Pedimos hasta 200 resultados para buscar bien
        const response = await fetch(`https://api.potterdb.com/v1/${category}?page[size]=200`);
        const data = await response.json();
        const items = data.data;

        // Filtrar resultados
        const filteredItems = items.filter(item => {
            const name = item.attributes.name || item.attributes.title || '';
            return name.toLowerCase().includes(searchTerm);
        });

        // Mostrar resultados
        displaySearchResults(filteredItems, category);
    } catch (error) {
        mainContent.innerHTML = '<p>Error al realizar la búsqueda</p>';
        console.error('Error:', error);
    }
}

function displaySearchResults(items, category) {
    const mainContent = document.getElementById('main-content');
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';

    if (items.length === 0) {
        mainContent.innerHTML = '<p>No se encontraron resultados</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        switch(category) {
            case 'characters':
                card.innerHTML = `
                    <img src="${item.attributes.image || 'placeholder.jpg'}" alt="${item.attributes.name}">
                    <div class="card-content">
                        <h2>${item.attributes.name}</h2>
                        <p>${item.attributes.house || 'Casa desconocida'}</p>
                    </div>
                `;
                break;
            case 'books':
                card.innerHTML = `
                    <img src="${item.attributes.cover || 'placeholder.jpg'}" alt="${item.attributes.title}">
                    <div class="card-content">
                        <h2>${item.attributes.title}</h2>
                        <p>${item.attributes.author || 'Autor desconocido'}</p>
                        <p>${item.attributes.release_date || ''}</p>
                    </div>
                `;
                break;
            case 'movies':
                card.innerHTML = `
                    <img src="${item.attributes.poster || 'placeholder.jpg'}" alt="${item.attributes.title}">
                    <div class="card-content">
                        <h2>${item.attributes.title}</h2>
                        <p>${item.attributes.release_date || ''}</p>
                        <p>${item.attributes.running_time || ''}</p>
                    </div>
                `;
                break;
            case 'spells':
                card.innerHTML = `
                    <div class="card-content">
                        <h2>${item.attributes.name}</h2>
                        <p>Tipo: ${item.attributes.category || 'Desconocido'}</p>
                        <p>Efecto: ${item.attributes.effect || 'Desconocido'}</p>
                    </div>
                `;
                break;
            default:
                card.innerHTML = `<div class="card-content"><h2>Sin datos</h2></div>`;
        }

        gridContainer.appendChild(card);
    });

    mainContent.innerHTML = '';
    mainContent.appendChild(gridContainer);
}

// Event listener para buscar al presionar Enter
document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// ==========================
// Fin del archivo combinado
// ==========================