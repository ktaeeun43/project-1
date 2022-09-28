import React, { useState } from 'react'

function Market() {
  const [search, setSearch] = useState("");

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }
  
  function onClickSearch() {

  }
  
 
  
  return (
    <>
    <input type="text" onChange={onChangeSearch} />
    <button onClick={onClickSearch}>검색</button>
    </>
  );
}

export default Market
