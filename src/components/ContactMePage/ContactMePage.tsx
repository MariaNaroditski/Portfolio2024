import { Title } from "../../Typography.styles";
import { constants } from "../../constants/constants";
import {
  ContactMeContainer,
  ContactMeInnerContainer,
} from "./ContactMePage.styles";
import Image from "../Image/Image";
import MyDrawing from "../../assets/my-drawing.jpg";
import Contact from "../Contact/Contact";
import { theme } from "../../theme";
import useDevice from "../../hooks/useDevice";

const { myDrawing, quote } = constants;

const ContactMePage = () => {
  const isSmallDevice = useDevice().tabletAndMobile;

  return (
    <ContactMeContainer>
      <Title
        $color={theme.first}
        $textAlign="center"
        $fontStyle="italic"
        $fontSize={isSmallDevice ? "2rem" : "3.5rem"}
      >
        {quote}
      </Title>
      <ContactMeInnerContainer>
        <Image
          src={MyDrawing}
          alt={myDrawing}
          $maxWidth={isSmallDevice ? "350px" : "600px"}
          $maxHeight={isSmallDevice ? "350px" : "600px"}
          $borderRadius="50%"
        />
        <Contact isContactPage />
      </ContactMeInnerContainer>
    </ContactMeContainer>
  );
};

export default ContactMePage;
