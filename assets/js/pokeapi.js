

const pokeAPI = {}
pokeAPI.getpokemon= (offset =0,limit =10)=>{

    const url = 'https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit
    return fetch(url)
    .then( (response)=>response.json())
    
    .then((jsonBody)=>jsonBody.results)

}
Promise.all(){[
    fetch(urlpokemon).then(((results)=>console.log(results))]}
