const updateFavoritePokemons = (name) => {
  const updatedFavorites = [...favorites];
  const favoriteIndex = favorites.indexOf(name);
  if (favoriteIndex >= 0) {
    updatedFavorites.splice(favoriteIndex, 1);
  } else {
    updatedFavorites.push(name);
  }
  window.localStorage.setItem(favoriteIndex, JSON.stringify(updatedFavorites));
  window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
  setFavorites(updatedFavorites);
};

const updateFavoritePokemons = (name) => {
  const updatedFavorites = [...favorites];
  const favoriteIndex = favorites.indexOf(name);
  if (favoriteIndex >= 0) {
    updatedFavorites.splice(favoriteIndex, 1);
  } else {
    updatedFavorites.push(name);
  }
  window.localStorage.setItem(favoriteIndex, JSON.stringify(updatedFavorites));
  window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
  setFavorites(updatedFavorites);
};
