import styled from "styled-components";
import { theme } from "../../theme";
import { deviceMax } from "../../constants/constants";

export const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: ${theme.first} white;
  scrollbar-width: thin;

  @media ${deviceMax.laptop} {
    justify-content: flex-start;
    padding: 8rem 0;
  }

  @media ${deviceMax.mobile} {
    padding: 3rem 0 0;
  }
`;

export const ContactMeInnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1440px;
  margin: 5rem 0 0;

  :nth-child(2) {
    align-self: flex-start;
  }

  @media ${deviceMax.laptop} {
    flex-direction: column-reverse;
    height: fit-content;
    max-width: 95%;
    margin: 2rem 0 0;

    :nth-child(2) {
      align-self: center;
    }
  }
`;
