import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [side, setSide] = useState(true)
  const {name, hp, sprites} = pokemon

  function handleClick(e){
    setSide((side) => !side)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img src={side ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
