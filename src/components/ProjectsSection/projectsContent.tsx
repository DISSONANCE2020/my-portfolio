import styles from "./ProjectsSection.module.css";

import ssphWebApp from "../../assets/images/ProjectsSection/ssphWebApp.png";
import ssphWebsite from "../../assets/images/ProjectsSection/ssphWebsite.png";
import readWithMe from "../../assets/images/ProjectsSection/readWithMe.png";
import locabuddy from "../../assets/images/ProjectsSection/locabuddy.png";
import smartEd from "../../assets/images/ProjectsSection/smartEd.png";

// LOGOS
import reactLogo from "../../assets/logos/reactLogo.png";
import laravelLogo from "../../assets/logos/laravelLogo.png";
import figmaLogo from "../../assets/logos/figmaLogo.png";
import tailwindLogo from "../../assets/logos/tailwindLogo.png";
import hostingerLogo from "../../assets/logos/hostingerLogo.png";
import junoLogo from "../../assets/logos/junoLogo.jpg";
import mantineLogo from "../../assets/logos/mantineLogo.svg";

// Uncomment if more logos are needed
// import jsLogo from "../../assets/logos/jsLogo.png";
// import phpLogo from "../../assets/logos/phpLogo.png";
// import nodeLogo from "../../assets/logos/nodeLogo.png";
// import xamppLogo from "../../assets/logos/xamppLogo.png";
// import mysqlLogo from "../../assets/logos/mysqlLogo.png";
// import postmanLogo from "../../assets/logos/postmanLogo.png";
// import mantineLogo from "../../assets/logos/mantineLogo.svg";
// import typescriptLogo from "../../assets/logos/typescriptLogo.png";

export type StackItem = {
  logo: string;
  label: string;
};

export type Project = {
  image: string;
  alt: string;
  name: string;
  role: string;
  stack: StackItem[];
  description: React.ReactNode;
  last?: boolean;
};

export const projects: Project[] = [
  {
    image: smartEd,
    alt: "SMARTEd",
    name: "SMART Ed",
    role: "Front-End Developer",
    stack: [
      { logo: reactLogo, label: "React" },
      { logo: mantineLogo, label: "Mantine CSS" },
    ],
    description: (
      <>
        Co-lead front-end development for SMART Ed, a public directory and
        dashboard for the Department of Education Schools Division of Mabalacat
        City.
      </>
    ),
  },
  {
    image: locabuddy,
    alt: "LocaBuddy",
    name: "LocaBuddy Mobile App",
    role: "Front-End Developer, UI/UX Designer",
    stack: [
      { logo: reactLogo, label: "React" },
      { logo: mantineLogo, label: "Mantine CSS" },
      { logo: figmaLogo, label: "Figma" },
    ],
    description: (
      <>
        Solely built app components and flow of LocaBuddy—a gamified
        accountability buddy mobile app designed to ensure users follow their
        designated personal schedules.
        <div className={styles.lineBreak} />
        Designed app branding and flow, from authorization to map and menu
        interface.
      </>
    ),
  },
  {
    image: readWithMe,
    alt: "ReadWithMe",
    name: "ReadWithMe",
    role: "Front-End Developer, UI/UX Designer",
    stack: [
      { logo: reactLogo, label: "React" },
      { logo: junoLogo, label: "Juno" },
      { logo: tailwindLogo, label: "Tailwind CSS" },
      { logo: figmaLogo, label: "Figma" },
    ],
    description: (
      <>
        Originated the full concept for ReadWithMe—an AI‑driven gamified reading
        platform that earned top recognition at the Regional Assembly of
        Information Technology Education 2024.
        <div className={styles.lineBreak} />
        Created user flows, wireframes, and UI in Figma, then built the
        interactive React.js interface featuring rewards, progress tracking, and
        AI feedback.
      </>
    ),
  },
  {
    image: ssphWebApp,
    alt: "SuitescapePH Web Application",
    name: "SuitescapePH Web Application",
    role: "Full-Stack Developer, UI/UX Designer",
    stack: [
      { logo: reactLogo, label: "React" },
      { logo: laravelLogo, label: "Laravel 11" },
      { logo: tailwindLogo, label: "Tailwind CSS" },
      { logo: figmaLogo, label: "Figma" },
    ],
    description: (
      <>
        I served as UI/UX Designer and full‑stack developer on the admin
        dashboard using React.js and Laravel 11.
        <div className={styles.lineBreak} />
        Leveraging intuitive wireframes and polished interfaces, I implemented
        secure, responsive workflows for managing the mobile app’s content,
        users, and finance—bridging admin needs into a functional, maintainable
        web system.
      </>
    ),
  },
  {
    image: ssphWebsite,
    alt: "SuitescapePH Website",
    name: "SuitescapePH Website",
    role: "Website Designer",
    stack: [{ logo: hostingerLogo, label: "Hostinger" }],
    description: (
      <>
        As Website Designer, I used Hostinger's built-in drag‑and‑drop website
        builder to conceive, style, and launch the public marketing site.
        <div className={styles.lineBreak} />I crafted responsive layouts,
        selected templates, and customized visual assets and brand elements
        directly within Hostinger’s editor, ensuring a crisp, accessible, and
        engaging web presence.
      </>
    ),
    last: true,
  },
];
