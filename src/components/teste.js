{
  !pokemon ? (
    <div>
      <div>Nome: {pokemon.name}</div>
      <div>Peso: {pokemon.weight}</div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  ) : null;
}
