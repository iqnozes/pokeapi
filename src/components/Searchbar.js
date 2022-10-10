import React, { useState } from "react";
import {
  getPokemons,
  getPokemonData,
  searchPokemon,
  pkRandom,
} from "../api.js";

const Searchbar = (props) => {
  const { onSearch, capsuleValue, search } = props;
  /*const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(Math.floor(Math.random() * 905));
    }
  };*/

  const onButtonClickHandler = () => {
    if (search === "") {
      onSearch(Math.floor(Math.random() * 905));
      console.log(search);
    } else {
      onSearch(search);
      console.log(search);
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar pokemon"
          onChange={(e) => {
            capsuleValue(e.target.value);
          }}
          value={search}
        />
      </div>

      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
