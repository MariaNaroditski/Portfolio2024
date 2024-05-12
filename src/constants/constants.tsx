export const constants = {
  frontendWebDeveloper: "Frontend Web Developer",
  skillsArr:
    "React | ES6, TS | HTML | CSS, Styled Components, Material UI | Redux | Mobx | NextJS | REST API | GraphQL",
  mariaLevy: "Maria Levy",
  goToResume: "Go To Resume",
  year: "2024",
  about1:
    "Hi, I'm Maria, and for me, the frontend world is the thin border between the real world and the omniscient world.",
  about2:
    "My journey into this captivating realm began back in high school when I discovered my passion for art. I was drawn to the idea of using visuals to convey emotions and tell stories.\nThis fascination with visual storytelling naturally led me to explore the world of frontend development. I realized that, much like art, frontend development is about creating experiences that resonate with people. It's about blending creativity with functionality to build interfaces that not only look great but also enrich the user's interaction.",
  about3:
    "Over the years, I've honed my skills in frontend technologies like React, HTML, CSS, JavaScript and more.\nI've had the opportunity to work on a variety of projects, from dynamic websites to interactive web applications. Each project has been a canvas for me to express my creativity and problem-solving skills.",
  about4:
    "What excites me most about frontend development is the endless possibilities it offers. Much like a blank canvas, a webpage holds the potential to become anything you envision. I'm constantly inspired by the challenge of creating seamless and engaging user experiences that bridge the gap between the virtual and the real.\nAs I continue to grow as a frontend developer, I look forward to pushing the boundaries of what's possible and using my skills to craft meaningful digital experiences.",
  myProfileImage: "My profile image",
  programmer: "Programmer",
  openingParagraph:
    "Highly organized, detail-oriented, creative and dependable Frontend Web Developer.",
  contactInfo: {
    contactTitle: "Contact Information",
    email: "Email",
    emailAddress: "marianaro159@gmail.com",
    phone: "Phone",
    phoneNumber: "0545560378",
  },
  copy: "copy",
  myDrawing: "my-drawing",
  personalQualifications: {
    qualificationsTitle: "Personal Qualifications",
    qualifications: [
      "Self taught",
      "Highly organized",
      "Detail-oriented",
      "Out Of Box thinking",
      "Highly motivated",
      "A team worker",
      "Good interpersonal skills",
    ],
  },
  skills: {
    skillsTitle: "Skills",
    skillsArr: [
      "React",
      "ES6",
      "TS",
      "HTML",
      "CSS",
      "Styled Components",
      "Material UI",
      "Redux",
      "Mobx",
      "NextJS",
      "REST API",
      "GraphQL",
    ],
  },
  downloadResume: "Download Resume",
  education: {
    educationTitle: "Education",
    educationArr: [
      {
        years: "2015 - 2018",
        text: "Graduated from Holon Institute of Technology with B.Sc. in computer science.",
      },
      {
        years: "2009 - 2011",
        text: "Graduated from Shenkar College with Electronics Engineer diploma (within an army project 'Rakia')",
      },
      {
        years: "2006 - 2009",
        text: "Graduated Ilan Ramon high-school with full diploma",
      },
    ],
  },
  experience: {
    experienceTitle: "Experience",
    latestExperience: {
      years: "2021– 2024 – React Frontend Developer at Monkeytech:",
      introduction:
        "As a programmer in Monkeytech I work with a lot of customers on various projects.\nEach project demands team and cross team collaboration while learning and adapting to new technologies and systems.\nThe job requires me to meet customers, schedule and sometimes work on several projects simultaneously.\nWhile working I:",
      tech: "Built responsive websites for various customers using: ",
      responsiveness:
        "Implemented responsive design mobile experience in client projects",
      systemDesign: "Planned system designs according to Figma/Zeplin",
      techRoadmap: "Prepared a technical roadmap for projects",
    },
    experienceArr: [
      {
        years: "2020 - 2021",
        text: "Taking online courses on the following topics: HTML, CSS / SCSS, Bootstrap, ES6, React, Redux, Flux, Node.js, Express.js and build projects:",
        link: "https://github.com/MariaNaroditski",
      },
      {
        years: "2019 - 2020",
        text: "Project conversion from Windows platform to Linux platform (C and C++) and work with CMAKE.",
      },
    ],
  },
  language: {
    languageTitle: "Language",
    languages: [
      "Hebrew  - Native language",
      "Russian - High language",
      "English - High level",
    ],
  },
  army: {
    armyTitle: "Army",
    years: "2013 – 2015 - Served in IDF Career Army as:",
    responsibilities: [
      "Commander of the technician department – operating 43 communication facilities while working with various factors and people.",
      "Provision of technical support to technicians and customers in the field.",
    ],
  },
  armyCareer: {
    years: "2011 – 2013 - Military service:",
    responsibilities: [
      "Full service in the IDF as a field technician in 'Eitanim Darom' under the 'Hoshen' unit.",
      "Work with versatile communication equipment in several fields:\n  1. SDH based communication – worked with ECI TELECOM products.\n  2. IP Networking – worked with Juniper and Cisco equipment.",
    ],
  },
  armySummary:
    "Military service demanded working under a lot of pressure, in teams and in front of many civilian companies and military units.",
  quote: `"Don't let someone else's opinion of you become your reality." -Les Brown.`,
};

export const pageLinks = [
  { id: 1, page: "Home", to: "/" },
  { id: 2, page: "About", to: "/about" },
  { id: 3, page: "Resume", to: "resume" },
  // {id:4, page:'Projects', to: "projects"},
  { id: 5, page: "Contact", to: "contact" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/maria-naroditski",
    className: "fa fa-linkedin-square",
  },
  {
    id: 2,
    href: "https://github.com/MariaNaroditski",
    className: "fa fa-github-square",
  },
];

const size = {
  mobile: 480,
  tablet: 768,
  laptop: 993,
  desktop: 1200,
  largeDesktop: 1920,
};

//For responsiveness
export const deviceMin = {
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  largeDesktop: `(min-width: ${size.largeDesktop}px)`,
};

export const deviceMax = {
  mobile: `(max-width: ${size.tablet - 1}px)`,
  tablet: `(max-width: ${size.laptop - 1}px)`,
  laptop: `(max-width: ${size.desktop - 1}px)`,
  desktop: `(max-width: ${size.largeDesktop - 1}px)`,
};
