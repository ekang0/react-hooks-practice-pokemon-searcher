import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemonList(data))
  }, []);

  
  function handleSearch(searchValue){
    //console.log(searchValue);
    const updatedPokemonList = pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
    setPokemonList(updatedPokemonList);
  };

  function handleAddNewPokemon(newPokemonData){
    setPokemonList([...pokemonList, newPokemonData])
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNewPokemon={handleAddNewPokemon}/>
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokemonList={pokemonList}/>
    </Container>
  );
}

export default PokemonPage;
