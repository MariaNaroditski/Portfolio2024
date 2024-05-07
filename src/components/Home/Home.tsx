import { Text, Title } from "../../Typography.styles";
import ProfileImage from "../../assets/profile_picture.png";
import { constants, socialLinks } from "../../constants/constants";
import useDevice from "../../hooks/useDevice";
import { theme } from "../../theme";
import Image from "../Image/Image";
import SocialLink from "../SocialLink/SocialLink";
import { SocialLinkContainer } from "../SocialLink/SocialLink.styles";
import {
  HomeContainer,
  InnerHomeContainer,
  DottedHr,
  GoToResume,
} from "./Home.styles";

const { frontendWebDeveloper, skillsArr, goToResume, myProfileImage } =
  constants;

const Home = () => {
  const isSmallDevice = useDevice().tabletAndMobile;

  return (
    <HomeContainer>
      <Image
        src={ProfileImage}
        alt={myProfileImage}
        $maxWidth={isSmallDevice ? "220px" : "460px"}
        $borderRadius="8px"
        $border={`10px double ${theme.first}`}
      />
      <InnerHomeContainer>
        <Title
          $textAlign="center"
          $fontSize={isSmallDevice ? "2rem" : "4rem"}
          $color={theme.first}
          $fontStyle="italic"
          $lineHeight="60px"
        >
          {frontendWebDeveloper}
        </Title>
        <DottedHr />
        <Text
          $maxWidth={isSmallDevice ? "70%" : "90%"}
          $textAlign="center"
          $fontSize={isSmallDevice ? "1rem" : "1.8rem"}
          $lineHeight="44px"
        >
          {skillsArr}{" "}
        </Text>
        <GoToResume to="/resume">{goToResume} </GoToResume>
        <SocialLinkContainer>
          {socialLinks.map((link) => (
            <SocialLink
              key={link.id}
              href={link.href}
              className={link.className}
            />
          ))}
        </SocialLinkContainer>
      </InnerHomeContainer>
    </HomeContainer>
  );
};

export default Home;
