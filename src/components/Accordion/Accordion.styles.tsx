import styled from "styled-components";
import { theme } from "../../theme";
import { deviceMax } from "../../constants/constants";

export const Hr = styled.hr`
  border-top: 1px solid ${theme.third};
  border-bottom: 1px solid ${theme.third};
  width: 100%;
  margin: 1rem 0;
`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  overflow: hidden;
`;

type ChildrenProps = {
  isOpen?: boolean;
};
export const Children = styled.div<ChildrenProps>`
  ${({ isOpen }) =>
    isOpen
      ? `
    opacity: 1;
    transition-timing-function: ease-in;
    transition: 0.5s;
    transform: translateY(0);
    height: 100%;

  `
      : `
    opacity: 0;
    transition-timing-function: ease-out;
    transition: 0.5s;
    transform: translateY(-10%);
    height: 0;

  `}
`;

type AccordionInnerContainerProps = {
  isListItems?: boolean;
};

export const AccordionInnerContainer = styled.div<AccordionInnerContainerProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: ${({ isListItems }) => (isListItems ? "3rem 0 0" : 0)};
`;

type ArrowButtonProps = {
  isListItems?: boolean;
};

export const ArrowButton = styled.button<ArrowButtonProps>`
  background: none;
  outline: none;
  border: none;
  color: ${({ isListItems }) => (isListItems ? theme.first : "white")};
  font-size: 1.2rem;
  cursor: pointer;

  @media ${deviceMax.mobile} {
    font-size: 1rem;
  }
`;
