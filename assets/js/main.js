
function pokemonToLi (pokemonListItem){
    return `<li class="pokemon">
    <span class="number">#001</span>
                <span class="name">${pokemonListItem.name}</span>
                <div class="detail">
                    <ol class = "types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
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
