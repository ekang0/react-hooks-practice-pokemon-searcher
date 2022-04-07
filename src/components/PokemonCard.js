import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { pokemon }) {
  //id 
  const { name, hp, sprites } = pokemon;
  const [imageToggle, setImageToggle] = useState(sprites.front);

  function onImgClick(){
    if(imageToggle === sprites.front){
      setImageToggle(sprites.back);
    } else if (imageToggle === sprites.back){
      setImageToggle(sprites.front)
    }
  };


  return (
    <Card onClick={onImgClick}>
      <div>
        <div className="image">
          <img alt={name} src={imageToggle}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
