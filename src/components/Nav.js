import "../App.css";
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import bottomNavList from '../atom/bottomNavList';
import navList from '../atom/navList';


const Wrapper = styled.div`
width: 100%;
height: 100%;
`;

const NavWrapper = styled.div`
background-color: #CD5C5C;
  display: flex;
  height: 55px;
  justify-content: space-between;
  align-items: center;
`;

const NavWrapper2 = styled.div`
  position: fixed;
  top: 55px;
  width: 100%;
  display: flex;
  background-color: white;
  height: 55px;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.div`
display: flex;
align-items: center;
`;

const LeftSideLink = styled.div`
  position: relative;
  left: 500px;
  display: flex;
  width: 100%;
  align-items: center;
  margin-left : 20px;
  text-decoration: none;
  color: black;
  font-family: DoHyeon-Regular;
`;

const Logo = styled.div`
width: 20px;
height: 20px;
`;

function Nav() {

  return (
    <>
    <Wrapper>
        <NavWrapper>
            <LeftSide>
                {navList.map(({ title, path}) => {
                    return (
                        <Link style={{ textDecoration: "none" }} to={`/page/${path}`}>
                            <LeftSideLink key={path}>{title}</LeftSideLink>
                        </Link>
                    )
                })}
            </LeftSide>
        </NavWrapper>
        <NavWrapper2>
            <LeftSide>
                <Link to={`/`}>
                    <Logo src="2798804.svg" />
                </Link>
                {bottomNavList.map(({ title, path}) => {
                    return (
                        <Link style={{ textDecoration: "none" }} to={`/page/${path}`}>
                            <LeftSideLink key={path}>{title}</LeftSideLink>
                        </Link>
                    )
                })}
            </LeftSide>
        </NavWrapper2>
    </Wrapper>
    </>
  )
}

export default Nav