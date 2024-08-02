function pokeInfo() {
    const nomePokemon = document.getElementById('nomePokemon').value.toLocaleLowerCase();
    const boxInfoPokemon = document.getElementById('boxInfoPokemon');
 
    fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Pokémon não encontrado!");
        }
        return response.json();
    })
    .then(data => {
        const dadosPokemon = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Altura: </strong> ${data.height / 10}m</p>
            <p><strong>Peso: </strong> ${data.weight / 10}kg</p>
            <p><strong>Tipo: </strong> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            <p><strong>Habilidades: </strong> ${data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
        `;
 
        boxInfoPokemon.innerHTML = dadosPokemon;
    })
    .catch(error => {
        boxInfoPokemon.innerHTML = `<p>${error.message}</p>`;
    });
}
 