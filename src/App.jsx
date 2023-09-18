import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import './App.css'

function App() {
  const pokemonList = [
{
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
const [pokemonIndex,setPokemonIndex] = useState(0);

const nextClick = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

const decrementClick = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  return (
    <>
      <div>
        <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
        {pokemonIndex > 0 ? <button onClick={decrementClick}>precedent</button> : "" }
        {pokemonIndex < pokemonList.length - 1 ?  <button onClick={nextClick}>suivant</button> : "" }
      </div>
    </>
  )
}

export default App
