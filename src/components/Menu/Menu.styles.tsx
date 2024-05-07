import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { deviceMax } from "../../constants/constants";
import { theme } from "../../theme";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 50%;
  height: 50%;
  margin: 1.5rem 0;
  border-radius: 50% 10% 50% 10% / 10% 50% 10% 50%;
  justify-content: center;
  align-items: center;

  @media ${deviceMax.mobile} {
    width: 70%;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem 0;
  color: black;

  &.active {
    color: ${theme.first};
  }

  @media ${deviceMax.mobile} {
    font-size: 1.5rem;
  }
`;
