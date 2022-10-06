import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  console.log("pokemons: ", pokemons);

  return (
    <div>
      <div className="Pokedex-header">
        <h1>Pokedex</h1>
        <div>Paginação:</div>
      </div>
      {loading ? (
        <div>Cerregando, segura fera....</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
