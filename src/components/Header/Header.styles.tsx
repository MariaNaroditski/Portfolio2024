import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { deviceMax } from "../../constants/constants";
import { theme } from "../../theme";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: ${theme.first};
    position: fixed;
    top: 0;
    z-index: 1;


    @media ${deviceMax.tablet} {
        position: sticky;
        top: 0;
        background: ${theme.first};
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  width: 95%;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const DoubleHr = styled.hr`
  width: 100%;
  height: 9px;
  margin: 0;
  border-top: 2px solid white;
  border-bottom: 4px solid white;
`;

type LinkProps = {
  $isNameLink?: boolean;
};

export const Link = styled(NavLink)<LinkProps>`
  text-decoration: none;
  color: white;
  ${({ $isNameLink }) =>
    $isNameLink
      ? `
        font-size: 2.2rem;
        font-weight: 600;
        font-style: oblique;
        text-align: left;

        @media ${deviceMax.mobile} {
            font-size: 1.8rem;
        } 
    `
      : `
        font-size: 1.3rem;

        &:hover {
            color: black;
        }
    
        &.active {
            color: black;
    
        }
    `}
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;

  a:not(:last-child) {
    margin-right: 4rem;
  }
`;

export const MenuButton = styled.button`
  font-size: 2rem;
  background: transparent;
  color: white;
  border: none;
`;

export const CloseButton = styled.button`
  font-size: 1.5rem;
  background: transparent;
  color: white;
  border: none;
`;
