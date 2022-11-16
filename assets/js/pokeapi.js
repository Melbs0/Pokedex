

const pokeAPI = {}

function dataToModel (getData){
const newPOK = new pokemonModel()
//types = getData.types.map((typeSlot) => typeSlot.type.name)
newPOK.abilitie1 = getData.abilities[0].name
newPOK.abilitie2 = getData.abilities
newPOK.id = getData.id
newPOK.name = getData.name
newPOK.sprite = getData.sprites.other.dream_world.front_default
newPOK.hp = getData.stats
newPOK.atack = getData.stats[1]
newPOK.defense = getData.stats[2]
newPOK.espAtk = getData.stats[3]
newPOK.espDef = getData.stats[4]
newPOK.speed = getData.stats[5]
//newPOK.type1 = types[0]
//newPOK.type2 = types[1]
return newPOK
}

pokeAPI.GetDetails = (pokemonURL) =>{
    return fetch (pokemonURL)
     .then((response) => response.json() )
     .then((jsonBody)=>jsonBody.results)
     .then(dataToModel)
 
 }


pokeAPI.GetData = (pokemon) =>{
   return fetch (pokemon.url)
    .then((response) => response.json() )
    .then(dataToModel)

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
