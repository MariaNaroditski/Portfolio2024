import { constants } from "../../constants/constants";
import { FooterContainer } from "./Footer.styles";

const { mariaLevy, year } = constants;

const Footer = () => {
  return (
    <FooterContainer>
      {" "}
      &copy; {mariaLevy} {year}{" "}
    </FooterContainer>
  );
};

export default Footer;
