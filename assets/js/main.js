

function pokemontype(poktype){
return poktype.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)

}

function pokemonToLi (pokemonListItem){
    return `<li class="pokemon">
    <span class="number">#${pokemonListItem.order}</span>
                <span class="name">${pokemonListItem.name}</span>
                <div class="detail">
                    <ol class = "types">
                        ${pokemontype(pokemonListItem.types).join('')}
                        
                    </ol>
                    <img src="${pokemonListItem.sprites.other.dream_world.front_default}"
                 alt="${pokemonListItem.name}">
                </div>
                
            </li>
            `
}
const pokemonOl = document.getElementById('pokemonslist')



pokeAPI.getpokemon().then((pokemonList = [])=>{
    
    pokemonOl.innerHTML += pokemonList.map(pokemonToLi).join('')
    
}
)

.catch((Error)=>console.log(Error))
