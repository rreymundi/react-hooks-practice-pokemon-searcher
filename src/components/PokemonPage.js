import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [search, setSearch] = useState("")
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((data) => setPokemon(data))
  }, [])

  const pokemonToDisplay = pokemon.filter((poke) => poke.name.toLowerCase().includes(search.toLocaleLowerCase()))

  function handlePokemonAdd(newPokemon){
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handlePokemonAdd}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
