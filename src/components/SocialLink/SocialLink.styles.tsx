import { styled } from "styled-components";
import { deviceMax } from "../../constants/constants";
import { theme } from "../../theme";

type SocialLinkProps = {
  $fontSize?: string;
};

export const SocialLink = styled.a<SocialLinkProps>`
  font-size: ${({ $fontSize }) => $fontSize || "2.5rem"};
  color: black;

  &:hover {
    color: ${theme.first};
  }

  @media (${deviceMax.laptop}) {
    font-size: 2rem;
  }
`;

type SocialLinkContainerProps = {
  $margin?: string;
  $maxWidth?: string;
};

export const SocialLinkContainer = styled.div<SocialLinkContainerProps>`
  display: flex;
  max-width: ${({ $maxWidth }) => $maxWidth || "85px"};
  width: 100%;
  justify-content: space-between;
  margin: ${({ $margin }) => $margin || 0};

  @media (${deviceMax.tablet}) {
    max-width: 75px;
  }
`;
