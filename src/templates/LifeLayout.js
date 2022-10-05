import React from "react";
import styled from "styled-components";
import { COLOR_LAYOUT_BACKGROUND, COLOR_WHITE, NAV_HEIGHT } from "../constants";
import { Link, useLocation } from "react-router-dom";
import LifeList from "../atom/LifeList";

const NoticeWrapper = styled.div` 
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    background-color: ${COLOR_LAYOUT_BACKGROUND};
    min-height: calc(100vh - 110px);
    width: '1280px'};
`;

const PageWrapper = styled.div`
    flex: 1 0 auto;
    display: flex;
    margin: '10px auto'};
`;

const Wrapper = styled.div`
    flex: 1 0 auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: '10px 0px'};
`;

const Left = styled.div`
    position: relative;
    display: ''};
    max-width: 180px;
    width: 100%;
    margin-right: 10px;
`;
const Right = styled.div`
    max-width: 1090px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${COLOR_WHITE};
    padding:  '0.75rem 1.25rem'};
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: calc(${NAV_HEIGHT} + 10px);
  background-color: ${COLOR_WHITE};
`;
const MenuTitleContainer = styled.div`
  height: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background-color: #b9cbfd;
  padding: 30px 20px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: ${COLOR_WHITE};
  word-break: break-all;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuList = styled.a`
    display: flex;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    padding: 10px 10px 10px 25px;
    text-decoration: none;
    font-weight:  'bold'};
    
    
    &:not([href]) {
        color:  '#575757'}; 
    }
    &:hover {
        font-weight: 800;
        color: #282828;
        text-decoration: none;
    }
`;
const MenuSelectList = styled.a`
    display: flex;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    padding: 10px 10px 10px 25px;
    text-decoration: none;
    font-weight: 800;
`;

const LifeLayout = (props) => {
  const location = useLocation();
  const focus = location.pathname.split("/Life/")[1];
  return (
    <PageWrapper>
      <NoticeWrapper>
        <Wrapper>
          <Left>
            <StickyWrapper>
              <MenuContainer>
                {LifeList.map(({ title, path }) => {
                  return (
                    <Link
                    style={{ textDecoration: "none", color: "black"  }}
                    to={`/life/${path}`}
                    >
                    { focus === path ?
                    <MenuSelectList>
                        {title}
                    </MenuSelectList> :
                    <MenuList >
                      {title}
                    </MenuList>
                    }
                      </Link>
                  );
                })}
              </MenuContainer>
            </StickyWrapper>
          </Left>
          <Right>{props.children}</Right>
        </Wrapper>
      </NoticeWrapper>
    </PageWrapper>
  );
};

export default LifeLayout;