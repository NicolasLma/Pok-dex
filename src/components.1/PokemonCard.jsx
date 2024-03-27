import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc === undefined ? (
        <div>
          <figcaption>{pokemon.name} </figcaption>
          <p>???</p>
        </div>
      ) : (
        <div>
          <figcaption>{pokemon.name}</figcaption>
          <img src={pokemon.imgSrc} />
        </div>
      )}
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default PokemonCard;
