const PokGet = new URLSearchParams(location.search)
const pokid = PokGet.get('id')
const pokURL = 'https://pokeapi.co/api/v2/pokemon/'+pokid
const pokemonsDetailed = pokeAPI.GetDetails(pokURL)
console.log(pokemonsDetailed.name)


    function createHead (pokemon){
        return `<h1> ${pokemon.name}</h1>
        `

    }

    /* ------------------------------- */

    const body = document.getElementById('body')
    body.innerHTML += createHead(pokemonsDetailed)
    
    
