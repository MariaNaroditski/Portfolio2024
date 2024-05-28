import styled from "styled-components";
import { theme } from "../../theme";
import { deviceMax } from "../../constants/constants";

export const ResumeContainer = styled.div`
  background: ${theme.secondary};
  width: 100%;
  height: 100%;
  margin-top: 3.5rem;
  overflow: scroll;
  scrollbar-color: ${theme.first} white;
  scrollbar-width: thin;

  @media ${deviceMax.laptop} {
    padding: 0 2rem;
    width: 95%;
    margin: 1rem 0 0;
  }

`;

export const ResumeInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;
  background: white;
  width: 100%;
  max-width: 1650px;
  margin: 0 auto;

  @media ${deviceMax.mobile} {
    width: 90%;
    padding: 0 1rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 450px;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  align-self: flex-start;
  background: white;
  padding: 5.5rem 0 4rem;

  @media ${deviceMax.laptop} {
    max-width: 100%;
  }

  @media ${deviceMax.mobile} {
    padding: 0;
  }
`;

type InfoProps = {
  $lineHeight?: string;
  $textAlign?: string;
  $alignItems?: string;
  $width?: string;
  $margin?: string;
};

export const Info = styled.div<InfoProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $alignItems }) => $alignItems || "center"};
  margin: ${({ $margin }) => $margin || 0};

  text-align: ${({ $textAlign }) => $textAlign || "center"};
  line-height: ${({ $lineHeight }) => $lineHeight || "normal"};
  white-space: break-spaces;
  width: 100%;

  @media ${deviceMax.laptop} {
    width: ${({ $width }) => $width || "90%"};
  }
`;

type ListContainerProps = {
  $padding?: string;
  $margin?: string;
  $isDividedUl?: boolean;
};

export const ListContainer = styled.ul<ListContainerProps>`
  width: 100%;
  text-align: left;
  margin: ${({ $margin }) => $margin || "1rem 0 0"};
  line-height: 35px;
  height: fit-content;
  padding: ${({ $padding }) => $padding || 0};
  font-size: 1.2rem;

  @media ${deviceMax.laptop} {
    ${({ $isDividedUl }) =>
      $isDividedUl &&
      `
        width: 100%;
        max-width: 700px;
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
      `}
  }

  @media ${deviceMax.mobile} {
    font-size: 1rem;
    ${({ $isDividedUl }) =>
      $isDividedUl &&
      `
        width: 100%;
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
      `}
  }
`;

export const RightContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  background: ${theme.resumeBg};
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  align-self: flex-start;
  color: white;
  padding: 4rem 2rem;
  margin: 5rem 0;

  @media ${deviceMax.laptop} {
    margin: 0;
  }

  @media ${deviceMax.mobile} {
    width: 98%;
    margin: 1rem 0 0;
    padding: 2rem 0 4rem 1rem;
  }
`;

export const DownloadPdf = styled.a`
  font-size: 2rem;
  color: ${theme.third};
  margin-bottom: 1.5rem;

  & :nth-child(2) {
    font-size: 1rem;
    color: white;
    margin-left: 0.8rem;
  }
`;

export const Skills = styled.div`
  padding: 0 0 0 1rem;

  @media ${deviceMax.mobile} {
    padding: 0 0 0 0.5rem;
  }
`;

export const Skill = styled.span`
  font-weight: 600;
  line-height: 30px;
`;

export const SkillLi = styled.li`
  color: white;
  padding: 0 0 0 1rem;
  line-height: 30px;
  font-size: 1.2rem;

  @media ${deviceMax.mobile} {
    padding: 0;
    font-size: 1rem;
  }
`;
