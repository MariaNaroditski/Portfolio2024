import styled from "styled-components";
import { deviceMax } from "../../../constants/constants";
import { theme } from "../../../theme";

export const InnerResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 1rem 0;
  letter-spacing: 0.8px;
  align-items: flex-start;
  line-height: 30px;

  a {
    color: ${theme.secondary};
  }

  @media ${deviceMax.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
