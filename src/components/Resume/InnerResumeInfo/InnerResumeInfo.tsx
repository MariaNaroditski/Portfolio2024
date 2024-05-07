import { Text } from "../../../Typography.styles";
import useDevice from "../../../hooks/useDevice";
import { InnerResumeContainer } from "./InnerResumeInfo.styles";

type InnerResumeInfoProps = {
  years: string;
  text: string;
  link?: string;
};

const InnerResumeInfo = (props: InnerResumeInfoProps) => {
  const { years, text, link } = props;
  const isSmallDevice = useDevice().tabletAndMobile;

  return (
    <InnerResumeContainer>
      <Text
        $color="white"
        $fontWeight="600"
        $fontSize={isSmallDevice ? "1rem" : "1.3rem"}
      >
        {years}
      </Text>
      <Text
        $color="white"
        $margin={isSmallDevice ? "0" : "1rem 0 0"}
        $lineHeight="25px"
        $maxWidth="650px"
        $fontSize={isSmallDevice ? "1rem" : "1.2rem"}
      >
        {text} {link && <a href={link}>{link}</a>}
      </Text>
    </InnerResumeContainer>
  );
};

export default InnerResumeInfo;
