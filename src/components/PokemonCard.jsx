function PokemonCard({pokemon}) {

    console.log(pokemon)
    return <figure>
        {pokemon.imgSrc === undefined ? "???" : <img src={pokemon.imgSrc} alt={pokemon.name} />}

        <figcaption>{pokemon.name}</figcaption>
    </figure>
}


export default PokemonCard