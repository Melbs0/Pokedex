

const pokeAPI = {}
pokeAPI.GetData = (pokemon) =>{
   return fetch (pokemon.url)
    .then((response) => response.json() )

}
pokeAPI.getpokemon= (offset =0,limit =10)=>{

    const url = 'https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit='+limit
    return fetch(url)
    .then( (response)=>response.json())
    
    .then((jsonBody)=>jsonBody.results)

    .then((pokemons)=> pokemons.map((pokeAPI.GetData)))

    .then ((detReq) => Promise.all(detReq))

    .then((detReq)=> {
        console.log(detReq)
        return detReq
   
    }
    )

}
