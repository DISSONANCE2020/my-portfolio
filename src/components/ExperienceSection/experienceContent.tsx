import styles from "./ExperienceSection.module.css";

import ictduLogo from "../../assets/logos/ictduLogo.png";
import likhaLogo from "../../assets/logos/likhaLogo.png";
import rightsLogo from "../../assets/logos/rightsLogo.png";

export type Experience = {
  logo: string;
  logoAlt: string;
  position: string;
  organization: string;
  description: React.ReactNode;
  date: string;
};

export const experiences: Experience[] = [
  {
    logo: ictduLogo,
    logoAlt: "SPCF ICTDU Logo",
    position: "Senior Web Developer",
    organization: "SPCF ICTDU",
    description: (
      <>
        Spearheading development of robust web applications using React.js and
        Laravel 11, focusing on admin modules for video management, user
        accounts, and financial reports.
      </>
    ),
    date: "2025-2026",
  },
  {
    logo: ictduLogo,
    logoAlt: "SPCF ICTDU Logo",
    position: "Junior Web Developer",
    organization: "SPCF ICTDU",
    description: (
      <>
        Built and maintained web features using React.js (front-end) and Laravel
        11 (back-end), mirroring current senior-level responsibilities.
        <div className={styles.lineBreak} />
        Designed the frontend UI for an award‑winning application at the
        Regional Assembly of Information Technology Education 2024, integrating
        form handling, dynamic display logic, and responsive design.
      </>
    ),
    date: "2024-2025",
  },
  {
    logo: ictduLogo,
    logoAlt: "SPCF ICTDU Logo",
    position: "UI/UX Designer",
    organization: "SPCF ICTDU",
    description: (
      <>
        Led UI/UX design for the same web applications built, developing user
        flows, wireframes, prototypes, and high-fidelity visuals.
        <div className={styles.lineBreak} />
        Supported fellow UI/UX designers by providing design assets, feedback,
        and ensuring brand consistency across all digital touchpoints.
      </>
    ),
    date: "2024-2026",
  },
  {
    logo: ictduLogo,
    logoAlt: "SPCF ICTDU Logo",
    position: "Graphic Designer",
    organization: "SPCF ICTDU",
    description: (
      <>
        Crafted visual assets for presentations, social media, and internal
        documents—including the 2024–2025 uniform design.
      </>
    ),
    date: "2024-2026",
  },
  {
    logo: likhaLogo,
    logoAlt: "SPCF CCIS LIKHA Logo",
    position: "Vice President Internal",
    organization: "SPCF CCIS LIKHA",
    description: (
      <>
        Managed internal communications across campus leadership and affiliated
        organizations, improving information flow and collaboration.
        <div className={styles.lineBreak} />
        Organized and facilitated coordination meetings and internal events,
        ensuring clear documentation and follow-ups across teams.
        <div className={styles.lineBreak} />
        Mediated cross-departmental initiatives, fostering alignment and
        positive working relationships.
      </>
    ),
    date: "2024",
  },
  {
    logo: rightsLogo,
    logoAlt: "SLU RIGHTS Events & Outreach Council Logo",
    position: "Creatives Head",
    organization: "SLU RIGHTS Events & Outreach Council",
    description: (
      <>
        Led a graphic design team, overseeing all social media content creation,
        brand consistency, and graphic deliverables.
        <div className={styles.lineBreak} />
        Designed the council’s 2021 uniform, aligning with organizational
        identity and event branding guidelines.
      </>
    ),
    date: "2021",
  },
];