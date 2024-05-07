import { SubTitle, Text } from "../../Typography.styles";
import useDevice from "../../hooks/useDevice";
import { theme } from "../../theme";
import {
  Hr,
  Children,
  AccordionInnerContainer,
  ArrowButton,
  AccordionContainer,
} from "./Accordion.styles";

const subTitleProps = (isSmallDevice: boolean) => {
  return {
    $color: "white",
    $lineHeight: "35px",
    $fontWeight: "600",
    $fontSize: isSmallDevice ? "1.25rem" : "2rem",
  };
};

type AccordionProps = {
  children: JSX.Element | JSX.Element[] | false;
  title: string;
  isOpen: boolean;
  handleTogglingAccordion: React.Dispatch<React.SetStateAction<boolean>>;
  isListItems?: boolean;
};

const Accordion = (props: AccordionProps) => {
  const { children, title, isOpen, handleTogglingAccordion, isListItems } =
    props;
  const isSmallDevice = useDevice().tabletAndMobile;

  return isListItems ? (
    <AccordionContainer>
      <AccordionInnerContainer isListItems={isListItems}>
        <Text $textAlign="center" $fontSize="1.5rem" $color={theme.first}>
          {title}
        </Text>
        <ArrowButton
          onClick={() => handleTogglingAccordion((prev) => !prev)}
          isListItems={isListItems}
        >
          {isOpen ? (
            <i className="fa fa-solid fa-chevron-up" />
          ) : (
            <i className="fa fa-solid fa-chevron-down" />
          )}
        </ArrowButton>
      </AccordionInnerContainer>
      {children}
    </AccordionContainer>
  ) : (
    <AccordionContainer>
      <Hr />
      <AccordionInnerContainer>
        <SubTitle {...subTitleProps(isSmallDevice)}>{title}</SubTitle>
        <ArrowButton onClick={() => handleTogglingAccordion((prev) => !prev)}>
          {isOpen ? (
            <i className="fa fa-solid fa-chevron-up" />
          ) : (
            <i className="fa fa-solid fa-chevron-down" />
          )}
        </ArrowButton>
      </AccordionInnerContainer>
      <Hr />
      <Children isOpen={isOpen}>{children}</Children>
    </AccordionContainer>
  );
};

export default Accordion;
