const PokGet = new URLSearchParams(location.search)
const pokid = PokGet.get('id')
const pokURL = 'https://pokeapi.co/api/v2/pokemon/'+pokid
const pokDetails = []
function getpokemon (URL){
return fetch(URL)
    .then( (response)=>response.json())
    
    .then((data)=> pokDetails.push)
    
    }
    console.log(getpokemon(pokURL))

    function createHead (pokemon){
        return `<h1> ${pokemon.name}</h1>
        `

    }

    /* ------------------------------- */

    const body = document.getElementById('body')
    body.innerHTML += createHead(pokDetails)
    
    
