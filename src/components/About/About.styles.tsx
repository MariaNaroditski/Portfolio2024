import styled from "styled-components";
import { deviceMax } from "../../constants/constants";
import { theme } from "../../theme";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.secondary};
  width: 100%;
  height: 100%;
  overflow: auto;
  scrollbar-color: ${theme.first} white;
  scrollbar-width: thin;

  @media ${deviceMax.laptop} {
    align-items: flex-start;
  }

  @media ${deviceMax.mobile} {
    padding-bottom: 1rem;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
  background: white;
  max-width: 1400px;
  padding: 4rem 2rem;
  white-space: break-spaces;
  border-right: 40px double ${theme.secondary};
  border-left: 40px double ${theme.secondary};

  @media ${deviceMax.desktop} {
    margin-top: 2rem;
    padding: 6rem 2rem;
  }

  @media ${deviceMax.laptop} {
    flex-direction: column;
    margin: 0;
    border-right: 30px double ${theme.secondary};
    border-left: 30px double ${theme.secondary};
  }

  @media ${deviceMax.mobile} {
    border-right: 20px double ${theme.secondary};
    border-left: 20px double ${theme.secondary};
    padding: 2rem;
  }
`;

export const AboutMeInnerContainer = styled.div`
  display: flex;
  max-width: 80%;
  height: calc(100% - 105px);
  flex-direction: column;
  justify-content: space-evenly;
  border-left: 1px solid ${theme.first};
  white-space: break-spaces;
  line-height: 40px;
  padding: 0 0 0 1.5rem;
  margin: 0 0 0 1rem;

  @media ${deviceMax.laptop} {
    border-left: none;
    max-width: 100%;
    padding: 0;
    height: 100%;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
  }
`;
