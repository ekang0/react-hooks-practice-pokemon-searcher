import React, { useState } from "react";

function Search( { onSearch }) {
  const [search, setSearch] = useState("");

  function searchFunction(e){
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={searchFunction}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
