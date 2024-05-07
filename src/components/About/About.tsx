import {
  AboutContainer,
  AboutMeContainer,
  AboutMeInnerContainer,
} from "./About.styles";
import { constants } from "../../constants/constants";
import { Text, Title } from "../../Typography.styles";
import { theme } from "../../theme";
import useDevice from "../../hooks/useDevice";

const { about1, about2, about3, about4 } = constants;

const About = () => {
  const isSmallDevice = useDevice();
  let isDesktopAndLaptop = isSmallDevice.desktopAndLaptop;
  let isTabletAndMobile = isSmallDevice.tabletAndMobile;

  const titleStyleObj = {
    $fontSize: isTabletAndMobile ? "1.5rem" : "2rem",
    $fontWeight: "600",
    $fontStyle: "italic",
    $lineHeight: isTabletAndMobile
      ? "35px"
      : isDesktopAndLaptop
      ? "45px"
      : "50px",
    $color: theme.first,
    $maxWidth: isDesktopAndLaptop ? "100%" : "15%",
  };

  const middledTextStyle = {
    $fontSize: isTabletAndMobile
      ? "1.2rem"
      : isDesktopAndLaptop
      ? "1.5rem"
      : "1.8rem",
    $fontWeight: "100",
    $color: theme.first,
    $fontStyle: "italic",
    $lineHeight: "40px",
    $margin: isDesktopAndLaptop ? "1rem 0" : "1.5rem 0",
  };

  return (
    <AboutContainer>
      <AboutMeContainer>
        <Title {...titleStyleObj}>{about1}</Title>
        <AboutMeInnerContainer>
          <Text $fontSize="1.25rem" $fontWeight="100" $lineHeight="35px">
            {about2}
          </Text>
          <Text {...middledTextStyle}>{about3}</Text>
          <Text $fontSize="1.25rem" $fontWeight="100" $lineHeight="35px">
            {about4}
          </Text>
        </AboutMeInnerContainer>
      </AboutMeContainer>
    </AboutContainer>
  );
};

export default About;
