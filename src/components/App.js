import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
//originally I had put the fetch and handle search in App but it could be in PokemonPage instead

  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
