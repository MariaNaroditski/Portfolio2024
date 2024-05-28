import { styled } from "styled-components";

type StyledImageProps = {
  $maxWidth?: string;
  $borderRadius?: string;
  $border?: string;
  $maxHeight?: string;
};
export const StyleImage = styled.img<StyledImageProps>`
  max-width: ${({ $maxWidth }) => $maxWidth || "100%"};
  max-height: ${({ $maxHeight }) => $maxHeight || "fit-content"};
  width: 100%;
  border: ${({ $border }) => $border || "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "unset"};
`;
