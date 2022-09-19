import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
background-color: #c891ed;
width: 100%
`;

const NavWrapper = styled.div`
  display: flex;
  height: 55px;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <>
    <Wrapper>
    <NavWrapper>
        test
    </NavWrapper>
    </Wrapper>
    </>
  )
}

export default Header