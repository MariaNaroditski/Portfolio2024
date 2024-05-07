import styled from "styled-components";
import { deviceMax } from "../../constants/constants";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 700px;
  box-shadow: 1px 15px 53px 28px rgba(234, 210, 210, 75%);
  -webkit-box-shadow: 2px 15px 53px 28px rgba(234, 210, 210, 75%);
  -moz-box-shadow: 2px 15px 53px 28px rgba(234, 210, 210, 75%);
  border-radius: 50% 10% 50% 10% / 10% 50% 10% 50%;
  margin: 2rem 0 0;

  @media ${deviceMax.tablet} {
    width: 95%;
    padding: 2rem 0 0;
    margin: 1rem 0 0;
  }
`;

export const InnerHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  width: 50%;
  color: black;
  height: 100%;
  max-height: 450px;

  @media (${deviceMax.tablet}) {
    margin-top: 1rem;
    width: 100%;
    justify-content: flex-start;
  }
`;
export const DottedHr = styled.hr`
  border-top: 6px dotted black;
  width: 80%;
  border-bottom: none;
  margin: 1.2rem 0 2rem;

  @media (${deviceMax.tablet}) {
    margin: 1.5rem 0 2rem;
    width: 80%;
  }

  @media (${deviceMax.mobile}) {
    border-width: 3px;
  }
`;

export const GoToResume = styled(NavLink)`
  color: ${theme.first};
  border-radius: 7px;
  text-decoration: none;
  border: 2px solid black;
  padding: 0.7rem;
  font-size: 1.2rem;
  max-width: 140px;
  width: 100%;
  margin: 2rem 0;

  &:hover {
    color: white;
    background: ${theme.first};
  }

  @media (${deviceMax.tablet}) {
    font-size: 1rem;
    max-width: 110px;
    margin: 2rem 0;
  }
`;
