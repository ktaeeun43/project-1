import React, { useState } from "react";
import styled from "styled-components";
const EmptyWrapper = styled.div`
width: 100%;
height: 110px;
`;

function Home() {

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

export default Home;
