import React from 'react'
import navList from '../atom/navList'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #CD5C5C;
    position: flex;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 20%;
`;

const LeftSideLink = styled.div`
position: relative;
display: flex;
align-items: center;
padding-left: 20px;
padding-right: 20px;
text-decoration: none;
font-family: "Do Hyeon";
color: white;
font-size: 100%;

`;


function Nav() {
  return (
    <>
    <Wrapper>
        <NavWrapper>
            <LeftSide>
                {navList.map(({ title, path }) => {
                    return (
                        <Link style={{ textDecoration: "none"}} to={`/${path}`}>
                            <LeftSideLink key={path}>{title}</LeftSideLink>
                        </Link>
                        )
                })}
            </LeftSide>
        </NavWrapper>
    </Wrapper>
    </>
  )
}

export default Nav