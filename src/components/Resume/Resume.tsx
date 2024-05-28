import { SubTitle, Text, Title } from "../../Typography.styles";
import ProfileImage from "../../assets/profile_picture.png";
import { constants } from "../../constants/constants";
import { theme } from "../../theme";
import Contact from "../Contact/Contact";
import Image from "../Image/Image";
import {
  Info,
  LeftContainer,
  ListContainer,
  DownloadPdf,
  ResumeContainer,
  RightContainer,
  Skill,
  SkillLi,
  Skills,
  ResumeInnerContainer,
} from "./Resume.styles";
import MyResumePdf from "../../assets/Maria_Levy_CV.pdf";
import InnerResumeInfo from "./InnerResumeInfo/InnerResumeInfo";
import useDevice from "../../hooks/useDevice";
import Accordion from "../Accordion/Accordion ";
import { useState } from "react";

const {
  mariaLevy,
  myProfileImage,
  programmer,
  openingParagraph,
  personalQualifications,
  skills,
  downloadResume,
  experience,
  education,
  army,
  armyCareer,
  armySummary,
  language,
} = constants;
const { qualificationsTitle, qualifications } = personalQualifications;
const { skillsTitle, skillsArr } = skills;
const { languageTitle, languages } = language;
const { educationTitle, educationArr } = education;
const { experienceTitle, latestExperience, experienceArr } = experience;

const textProps = (isSmallDevice: boolean, isTitle?: boolean) => {
  return {
    $color: "white",
    $lineHeight: "35px",
    $fontWeight: isTitle ? "600" : "100",
    $margin: isTitle ? "0 0 0.25rem" : "0",
    $fontSize: isTitle
      ? isSmallDevice
        ? "1rem"
        : "1.3rem"
      : isSmallDevice
      ? "1rem"
      : "1.2rem",
  };
};

const Resume = () => {
  const [isOpenExperience, setIsOpenExperience] = useState(true);
  const [isOpenEducation, setIsOpenEducation] = useState(true);
  const [isOpenArmy, setIsOpenArmy] = useState(true);
  const [isOpenLanguage, setIsOpenLanguage] = useState(true);
  const [isOpenQualifications, setIsOpenQualifications] = useState(true);
  const [isOpenSkills, setIsOpenSkills] = useState(true);

  const isSmallDevice = useDevice().tabletAndMobile;

  return (
    <ResumeContainer>
      <ResumeInnerContainer>
        <LeftContainer>
          <Image src={ProfileImage} alt={myProfileImage} $maxWidth="300px" />
          <Title $fontSize="2.5rem" $fontWeight="600" $margin="2rem 0 1.5rem">
            {mariaLevy}
          </Title>
          <SubTitle $fontSize="2rem" $color={theme.first}>
            {programmer}
          </SubTitle>
          <Text
            $fontSize="1.2rem"
            $textAlign="center"
            $lineHeight="30px"
            $margin="1.5rem 0 2rem"
            $padding={isSmallDevice ? "0 1.5rem" : "0"}
            $maxWidth={isSmallDevice ? "350px" : "fit-content"}
          >
            {openingParagraph}
          </Text>
          <Contact />
          <Accordion
            title={qualificationsTitle}
            isOpen={isOpenQualifications}
            handleTogglingAccordion={setIsOpenQualifications}
            isListItems
          >
            <ListContainer $isDividedUl $padding="0 0 0 1rem">
              {isOpenQualifications &&
                qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
            </ListContainer>
          </Accordion>
          <Accordion
            title={skillsTitle}
            isOpen={isOpenSkills}
            handleTogglingAccordion={setIsOpenSkills}
            isListItems
          >
            {isOpenSkills && (
              <ListContainer $isDividedUl $padding="0 0 0 1rem">
                {skillsArr.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ListContainer>
            )}
          </Accordion>
        </LeftContainer>
        <RightContainer>
          <DownloadPdf href={MyResumePdf} download title={downloadResume}>
            <i className="fa fa-file-pdf-o" />
            <i className="fa fa-download" />
          </DownloadPdf>
          <Accordion
            title={experienceTitle}
            isOpen={isOpenExperience}
            handleTogglingAccordion={setIsOpenExperience}
          >
            <Info $alignItems="flex-start">
              <Text {...textProps(isSmallDevice, true)}>
                {latestExperience.years}
              </Text>
              <Text {...textProps(isSmallDevice)}>
                {latestExperience.introduction}
              </Text>
              <ListContainer
                $padding={isSmallDevice ? "0 0 0 0.5rem" : "0 0 0 2rem"}
                $margin="0 0 1.5rem"
              >
                <SkillLi>{latestExperience.tech}</SkillLi>
                <Skills>
                  {skillsArr.map((skill, index) => (
                    <Skill key={index}>
                      {skill}
                      {index !== skillsArr.length - 1 && ", "}
                    </Skill>
                  ))}
                </Skills>
                <SkillLi>{latestExperience.responsiveness}</SkillLi>
                <SkillLi>{latestExperience.systemDesign}</SkillLi>
                <SkillLi>{latestExperience.techRoadmap}</SkillLi>
              </ListContainer>
              {experienceArr.map((info, index) => (
                <InnerResumeInfo key={index} {...info} />
              ))}
            </Info>
          </Accordion>
          <Accordion
            title={educationTitle}
            isOpen={isOpenEducation}
            handleTogglingAccordion={setIsOpenEducation}
          >
            <Info>
              {educationArr.map((info, index) => (
                <InnerResumeInfo key={index} {...info} />
              ))}
            </Info>
          </Accordion>
          <Accordion
            title={army.armyTitle}
            isOpen={isOpenArmy}
            handleTogglingAccordion={setIsOpenArmy}
          >
            <Info $alignItems="flex-start">
              <Text {...textProps(isSmallDevice, true)}>{army.years}</Text>
              {army.responsibilities.map((responsibility, index) => (
                <Text key={index} {...textProps(isSmallDevice)}>
                  {responsibility}
                </Text>
              ))}
              <Text {...textProps(isSmallDevice, true)} $margin="1rem 0 0">
                {armyCareer.years}
              </Text>
              {armyCareer.responsibilities.map((responsibility, index) => (
                <Text key={index} {...textProps(isSmallDevice)}>
                  {responsibility}
                </Text>
              ))}
              <Text
                {...textProps(isSmallDevice)}
                $fontWeight="600"
                $margin="1rem 0 0"
              >
                {armySummary}
              </Text>
            </Info>
          </Accordion>
          <Accordion
            title={languageTitle}
            isOpen={isOpenLanguage}
            handleTogglingAccordion={setIsOpenLanguage}
          >
            <Info $margin="0">
              {isOpenLanguage && (
                <ListContainer $padding="0 0 0 1rem">
                  {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ListContainer>
              )}
            </Info>
          </Accordion>
        </RightContainer>
      </ResumeInnerContainer>
    </ResumeContainer>
  );
};

export default Resume;
