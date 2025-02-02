
function getPokemonIdFromURL() {
    const params = new URLSearchParams(window.location.search)
    return params.get('pokemon') 
}


function loadPokemonDetails() {
    const pokemonId = getPokemonIdFromURL()

    if (!pokemonId) {
        console.error("Nenhum Pokémon foi selecionado.")
        return
    }

    pokeApi.getPokemonById(pokemonId).then((pokemon) => {
        document.getElementById('pokedex-card-page').innerHTML = `
        <div id="pokedex-card">
    
            <div class="pokedex-header ${pokemon.type}">
                <h2 class="namePage">${pokemon.name}</h2>
                <p class="numberPage">#${pokemon.number}</p>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>

            <div class="pokedex-body">
                <div class="tabs">
                    <span class="active">About</span>
                </div>
                <div class="info">
                    <p><strong>Type:</strong> ${pokemon.types.join(', ')}</p>
                    <p><strong>Height:</strong> ${pokemon.height}</p>
                    <p><strong>Weight:</strong> ${pokemon.weight}</p>
                    <p><strong>Abilities:</strong> ${pokemon.abilities.join(', ')}</p>
                </div>
            </div>
            
        </div>
        `
    })
}

loadPokemonDetails()