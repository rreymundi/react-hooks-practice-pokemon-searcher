import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const renderedCards = pokemon.map((poke) => <PokemonCard key={poke.id} pokemon={poke}/>)

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      <div>{renderedCards}</div>
    </Card.Group>
  );
}

export default PokemonCollection;
