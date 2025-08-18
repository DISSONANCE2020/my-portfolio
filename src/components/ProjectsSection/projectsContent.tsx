import styles from "./ProjectsSection.module.css";

import ssphWebApp from "../../assets/images/ProjectsSection/ssphWebApp.png";
import ssphWebsite from "../../assets/images/ProjectsSection/ssphWebsite.png";
import readWithMe from "../../assets/images/ProjectsSection/readWithMe.png";

export type Project = {
  image: string;
  alt: string;
  name: string;
  role: string;
  description: React.ReactNode;
  last?: boolean;
};

export const projects: Project[] = [
  {
    image: ssphWebApp,
    alt: "SuitescapePH Web Application",
    name: "SuitescapePH Web Application",
    role: "Full-Stack Developer, UI/UX Designer",
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
  },
  {
    image: readWithMe,
    alt: "ReadWithMe",
    name: "ReadWithMe",
    role: "Front-End Developer, UI/UX Designer",
    description: (
      <>
        I originated the full concept for ReadWithMe—an AI‑driven gamified
        reading platform—serving as UI/UX Designer and front‑end developer.
        <div className={styles.lineBreak} />
        From idea to MVP, I created user flows, wireframes, and UI in Figma,
        then built the interactive React.js interface featuring rewards,
        progress tracking, and AI feedback.
        <div className={styles.lineBreak} />
        This concept-to-launch project earned top recognition at the Regional
        Assembly of Information Technology Education 2024.
      </>
    ),
    last: true,
  },
];