import styled from "styled-components";
import { deviceMax } from "./constants/constants";

type TypographyProps = {
  $fontSize?: string;
  $fontWeight?: string;
  $textAlign?: string;
  $fontStyle?: string;
  $lineHeight?: string;
  $margin?: string;
  $padding?: string;
  $color?: string;
  $maxWidth?: string;
};

export const Title = styled.h1<TypographyProps>`
  margin: ${({ $margin }) => $margin || 0};
  padding: ${({ $padding }) => $padding || 0};
  color: ${({ $color }) => $color || "black"};
  font-size: ${({ $fontSize }) => $fontSize || "2rem"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "100"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  font-style: ${({ $fontStyle }) => $fontStyle || "normal"};
  line-height: ${({ $lineHeight }) => $lineHeight || "normal"};
  max-width: ${({ $maxWidth }) => $maxWidth || "100%"};

  @media (${deviceMax.tablet}) {
    font-size: ${({ $fontSize }) => $fontSize || "1.8rem"};
  }

  @media (${deviceMax.mobile}) {
    font-size: ${({ $fontSize }) => $fontSize || "1.4rem"};
    line-height: normal;
  }
`;

export const SubTitle = styled.h2<TypographyProps>`
  margin: ${({ $margin }) => $margin || 0};
  padding: ${({ $padding }) => $padding || 0};
  color: ${({ $color }) => $color || "black"};
  font-size: ${({ $fontSize }) => $fontSize || "1.5rem"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "100"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  font-style: ${({ $fontStyle }) => $fontStyle || "normal"};
  line-height: ${({ $lineHeight }) => $lineHeight || "normal"};
  max-width: ${({ $maxWidth }) => $maxWidth || "100%"};

  @media (${deviceMax.tablet}) {
    font-size: ${({ $fontSize }) => $fontSize || "1.4rem"};
  }

  @media (${deviceMax.mobile}) {
    font-size: ${({ $fontSize }) => $fontSize || "1.2rem"};
    line-height: normal;
  }
`;

export const Text = styled.p<TypographyProps>`
  margin: ${({ $margin }) => $margin || 0};
  padding: ${({ $padding }) => $padding || 0};
  color: ${({ $color }) => $color || "black"};
  font-size: ${({ $fontSize }) => $fontSize || "1rem"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "100"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  font-style: ${({ $fontStyle }) => $fontStyle || "normal"};
  line-height: ${({ $lineHeight }) => $lineHeight || "normal"};
  max-width: ${({ $maxWidth }) => $maxWidth || "100%"};

  @media (${deviceMax.tablet}) {
    font-size: ${({ $fontSize }) => $fontSize || "1.3rem"};
    line-height: 30px;
  }

  @media (${deviceMax.mobile}) {
    font-size: ${({ $fontSize }) => $fontSize || "1.2rem"};
    line-height: 25px;
  }
`;
