const pokemonOl = document.getElementById('pokemonslist')
const loadMoreButton = document.getElementById('loadMore')

function pokemonToLi (pokemonModel){
    return `<a id ="anchor" href = "pokemonDetail.html?id=${pokemonModel.number}">
    <li class="pokemon ${pokemonModel.types[0]}">
    <span class="number">#${pokemonModel.number}</span>
                <span class="name">${pokemonModel.name}</span>
                <div class="detail">
                    <ol class = "types">
                        ${pokemonModel.types.map((types)=>`<li class="type ${types}">${types}</li>`).join('')}
                        
                    </ol>
                    <img src="${pokemonModel.photo}"
                 alt="${pokemonModel.name}">
                </div>
                
            </li>
            </a>
            `
           
}



const limit = 12
let offset = 0

function loadItens(offset,limit){

pokeAPI.getpokemon(offset,limit).then((pokemonList = [])=>{
    
    pokemonOl.innerHTML += pokemonList.map(pokemonToLi).join('')
    
}
)

.catch((Error)=>console.log(Error))
}

loadItens(offset,limit)

loadMoreButton.addEventListener('click',() => {offset += limit
return loadItens(offset,limit)
}
)

