import PokemonCard from "./components.1/PokemonCard";
import { useState } from "react";
import NavBar from "./components.1/NavBar";

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



function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const handleClickPrecedent = () => {
    setpokemonIndex(pokemonIndex - 1)
  }
  const handleClickSuivant = () => {
    setpokemonIndex(pokemonIndex + 1)
  }

  //pokemonIndex > 0 --> ? 
  //pokemonIndex < pokemonList.lenght - 1 --> : 

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar pokemonIndex={pokemonIndex}
              handleClickPrecedent={handleClickPrecedent}
              handleClickSuivant={handleClickSuivant}
              pokemonList={pokemonList}
              />
              
    </div>
  );
}

export default App;