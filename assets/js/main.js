

function pokemontype(poktype){
return poktype.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)

}

function pokemonToLi (pokemonModel){
    return `<li class="pokemon ${pokemonModel.types[0]}">
    <span class="number">#${pokemonModel.number}</span>
                <span class="name">${pokemonModel.name}</span>
                <div class="detail">
                    <ol class = "types">
                        ${pokemontype(pokemonListItem.types).join('')}
                        
                    </ol>
                    <img src="${pokemonListItem.sprites.other.dream_world.front_default}"
                 alt="${pokemonListItem.name}">
                </div>
                
            </li>
            </a>
            `
           
}
const limit = 10
let offset = 0


pokeAPI.getpokemon().then((pokemonList = [])=>{
    
    pokemonOl.innerHTML += pokemonList.map(pokemonToLi).join('')
    
}
)
loadItens(offset,limit)

.catch((Error)=>console.log(Error))

loadMoreButton.addEventListener('click',() => {offset++
return loadItens()
}
)