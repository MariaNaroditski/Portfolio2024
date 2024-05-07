import styled from "styled-components";
import { theme } from "../../theme";
import { deviceMax } from "../../constants/constants";

type ContactContainerProps = {
  isContactPage?: boolean;
};

export const ContactContainer = styled.div<ContactContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: ${({ isContactPage }) => (isContactPage ? "430px" : "fit-content")};
  border: ${({ isContactPage }) =>
    isContactPage ? "none" : `4px double ${theme.first}`};
  padding: 1rem;
  max-width: ${({ isContactPage }) => (isContactPage ? "600px" : "100%")};

  @media ${deviceMax.laptop} {
    border-left: none;
    border-right: none;
    width: ${({ isContactPage }) => (isContactPage ? "100%" : "50%")};
    height: ${({ isContactPage }) => (isContactPage ? "230px" : "fit-content")};
  }

  @media ${deviceMax.mobile} {
    width: 90%;
    padding: 1rem 0;
  }
`;

type ContactItemProps = {
  $fontSize?: string;
};

export const ContactItem = styled.div<ContactItemProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-size: ${({ $fontSize }) => $fontSize || "2rem"};
`;

export const CopyButton = styled.button`
  width: fit-content;
  font-size: 1rem;
  height: 24px;
  background: white;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    span {
      visibility: visible;
    }
  }
`;
export const Tooltip = styled.span`
  visibility: hidden;
  width: fit-content;
  background: black;
  color: white;
  font-size: 0.85rem;
  text-align: center;
  border-radius: 6px;
  padding: 0.4rem;
  position: absolute;
  left: 1.2rem;
  z-index: 1;

  @media ${deviceMax.tablet} {
    left: 0rem;
    top: 1.2rem;
  }
`;
