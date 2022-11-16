

const pokeAPI = {}


function dataToModel(getData){
    const newPOK = new pokemonModel()
newPOK.number = getData.order
newPOK.name = getData.name
newPOK.types = getData.types.map((typeSlot) => typeSlot.type.name)
newPOK.Type = getData.types[0]
newPOK.photo = getData.sprites.other.dream_world.front_default
return newPOK
}


pokeAPI.GetData = (pokemon) =>{
   return fetch (pokemon.url)
    .then((response) => response.json() )

}



pokeAPI.getpokemon= (offset,limit)=>{

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
