// eslint-disable-next-line react/prop-types
import PropTypes from "prop-types";

export default function NavBar({ pokemonList, setpokemonIndex }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => setpokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

NavBar.protoTypes = {
  setpokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};