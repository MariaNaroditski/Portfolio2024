import styled from "styled-components";
import { theme } from "../../theme";
import { deviceMax } from "../../constants/constants";

export const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1220px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 80px 0 0;
  padding: 0rem 2rem 0;

  @media ${deviceMax.laptop} {
    justify-content: flex-start;
    margin: 20px 0 40px;
    padding: 4rem 0 0;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-color: ${theme.first} white;
    scrollbar-width: thin;
  }

  @media ${deviceMax.tablet} {
    margin: 20px 0 40px;
    padding: 1rem 0 0;
  }
`;

export const ContactMeInnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1440px;
  margin-top: 2rem;

  :nth-child(2) {
    align-self: flex-start;
  }

  @media ${deviceMax.laptop} {
    flex-direction: column-reverse;
    height: fit-content;
    max-width: 95%;
    margin-top: 1rem;

    :nth-child(2) {
      align-self: center;
    }
  }
`;
