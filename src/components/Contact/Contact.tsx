import {
  ContactContainer,
  ContactItem,
  CopyButton,
  Tooltip,
} from "./Contact.styles";
import { Text, Title } from "../../Typography.styles";
import { copyText } from "../../utils/utils";
import { theme } from "../../theme";
import { constants, socialLinks } from "../../constants/constants";
import { SocialLinkContainer } from "../SocialLink/SocialLink.styles";
import SocialLink from "../SocialLink/SocialLink";
import useDevice from "../../hooks/useDevice";

const { copy, contactInfo } = constants;
const { phone, phoneNumber, email, emailAddress, contactTitle } = contactInfo;

type ContactProps = {
  isContactPage?: boolean;
};

const Contact = (props: ContactProps) => {
  const isSmallDevice = useDevice().tabletAndMobile;
  const { isContactPage } = props;

  const titleProps = isContactPage
    ? { $fontSize: isSmallDevice ? "1.8rem" : "3rem" }
    : {
        $fontSize: isSmallDevice ? "1.5rem" : "1.8rem",
        $margin: "0 0 1rem",
      };

  const textProps = isContactPage
    ? { $fontSize: isSmallDevice ? "1rem" : "2rem" }
    : {
        $fontSize: isSmallDevice ? "1rem" : "1.5rem",
      };

  return (
    <ContactContainer isContactPage={isContactPage}>
      <Title $textAlign="center" $color={theme.first} {...titleProps}>
        {contactTitle}
      </Title>

      <ContactItem>
        <Text {...textProps}>{phone}:</Text>
        <Text {...textProps}>{phoneNumber}</Text>
        <CopyButton onClick={() => copyText(phoneNumber)}>
          <Tooltip>{copy}</Tooltip>
          <i className="fa fa-copy" />
        </CopyButton>
      </ContactItem>
      <ContactItem {...textProps}>
        <Text {...textProps}>{email}: </Text>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marianaro159@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {emailAddress}
        </a>
        <CopyButton onClick={() => copyText(emailAddress)}>
          <Tooltip>{copy}</Tooltip>
          <i className="fa fa-copy" />
        </CopyButton>
      </ContactItem>
      <SocialLinkContainer $margin="1rem auto 0">
        {socialLinks.map((link) => (
          <SocialLink
            key={link.id}
            href={link.href}
            className={link.className}
          />
        ))}
      </SocialLinkContainer>
    </ContactContainer>
  );
};

export default Contact;
