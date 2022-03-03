const API_URL = 'https://rickandmortyapi.com/api/character'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const frag = document.createDocumentFragment();


const Pelis = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results[1].url.name);
    showMovies(data.results)
}

Pelis(API_URL)

const showMovies = (movies) => {

    main.innerHTML = ""
    movies.forEach((elementos) => {
        const { name, image, species, status } = elementos;
        const div = document.createElement('div');
        div.classList.add('movie')
        div.innerHTML = `
        <img src="${image}" alt="">
        <div class="movie-info">
            <h2>${name}</h2><br>
        </div>
        <div class="overview">
        <h2>Specie:</h2>
        <h3>${species}</h3>
        <h2>Status:</h2>
        <div class="status">
        <span class="${status == "Alive" ? "span_green" : status == "Dead" ? "span_red" : "span_black"}">${status}</span>
        <div class="${status == "Alive" ? "green" : status == "Dead" ? "red" : "black"}"></div>
        </div>
        </div>`
        const node = div.cloneNode(true)
        frag.appendChild(node)
    });
    main.appendChild(frag)

}

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const searchItem = search.value.toLocaleLowerCase()
//     if (searchItem && searchItem !== "") {
//         Pelis(SEARCH_URL + searchItem)
//     }
//     else {
//         alert("Error")
//     }
// })