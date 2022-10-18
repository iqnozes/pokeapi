import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  console.log(favoritePokemons);

  const logoimg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div className="Nav-img">
        <img alt="pokeapi-logo" src={logoimg} className="navbar-img" />
      </div>

      <div className="Fav-pokemon">{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;
