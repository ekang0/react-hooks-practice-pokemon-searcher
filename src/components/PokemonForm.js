import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { onAddNewPokemon }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontURL, setFrontURL] = useState("");
  const [backURL, setBackURL] = useState("");

  function handleNameChange(e) {
    setName(e.target.value)
  };

  function handleHpChange(e){
    setHp(e.target.value)
  };

  function handleFrontURLChange(e){
    setFrontURL(e.target.value)
  };

  function handleBackURLChange(e){
    setBackURL(e.target.value)
  };

  function onFormSubmit(e){
    e.preventDefault();
    //console.log("submitting form...");
    const newPokemonData = {
      name: name,
      hp: hp,
      sprites :{
        front: frontURL,
        back: backURL,
      }  
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemonData)
    })
    .then(resp => resp.json())
    .then(newPokemonData => onAddNewPokemon(newPokemonData))
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleNameChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHpChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontURL}
            onChange={handleFrontURLChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backURL}
            onChange={handleBackURLChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
