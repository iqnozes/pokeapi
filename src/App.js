import "./App.css";
import Navbar from "./components/navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/pokedex";
import React, { useEffect, useState } from "react";
import { getPokemons, getPokemonData, searchPokemon } from "./api.js";
import { FavoriteProvider } from "./contexts/favoritesContext";

const favoritesKey = "f";
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [search, setSearch] = useState("");

  const itensPerPage = 30;
  const itensData = 905;

  const pokeArr = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensData);
      const promises = data.results.map(async (pokedata) => {
        return await getPokemonData(pokedata.url);
      });

      const results = await Promise.all(promises);
      setDataArr(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensData));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const capsuleValue = (value) => {
    setSearch(value);
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  useEffect(() => {
    pokeArr();
  }, [page]);

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const onSearchHandler = async (pokedata) => {
    const newPokes = dataArr.filter((x) => x.includes(search));
    console.log(newPokes);
  };
  /*
  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  */

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));

    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar />
        <Searchbar
          onSearch={onSearchHandler}
          capsuleValue={capsuleValue}
          search={search}
        />
        {notFound ? (
          <div className="not-found-text"> Pokemon Ainda não Descoberto!</div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </FavoriteProvider>
  );
}

export default App;
