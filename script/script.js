const API_URL = 'https://rickandmortyapi.com/api/character'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const frag = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    showMovies(data.results)
})

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

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const searchItem = search.value.toLocaleLowerCase()
    res = await fetch(API_URL)
    data = await res.json()
    if (searchItem && searchItem !== "") {
        newData = data.results.filter((element) => {
            return element.name.toLocaleLowerCase().includes(searchItem)
        })
        console.log(newData);
        if(newData.length == 0){
            main.innerHTML = `
            <h1 class="colorNo">No Hay Nada</h1>
            `
        }
        else{
            showMovies(newData)
        }

        form.reset();
    }
    else {
        showMovies(data.results)
    }
})