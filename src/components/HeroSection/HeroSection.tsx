import styles from "./HeroSection.module.css";
import myPhoto from "../../assets/images/HeroSection/myPhoto.png";

import reactLogo from "../../assets/logos/reactLogo.png";
import laravelLogo from "../../assets/logos/laravelLogo.png";
import jsLogo from "../../assets/logos/jsLogo.png";
import phpLogo from "../../assets/logos/phpLogo.png";
import nodeLogo from "../../assets/logos/nodeLogo.png";
import xamppLogo from "../../assets/logos/xamppLogo.png";
import mysqlLogo from "../../assets/logos/mysqlLogo.png";
import githubLogo from "../../assets/logos/githubLogo.png";
import postmanLogo from "../../assets/logos/postmanLogo.png";
import figmaLogo from "../../assets/logos/figmaLogo.png";
import tailwindLogo from "../../assets/logos/tailwindLogo.png";
import mantineLogo from "../../assets/logos/mantineLogo.svg";

const gridCells = [
  // Row 1
  { logo: reactLogo, text: "React", href: "https://react.dev/" },
  { logo: laravelLogo, text: "Laravel 11", href: "https://laravel.com/" },
  {
    logo: jsLogo,
    text: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  // Row 2
  { logo: phpLogo, text: "PHP", href: "https://www.php.net/docs.php" },
  { logo: nodeLogo, text: "Node.js", href: "https://nodejs.org/en" },
  { logo: xamppLogo, text: "XAMPP", href: "https://www.apachefriends.org/" },

  // Row 3
  { logo: mysqlLogo, text: "MySQL", href: "https://www.mysql.com/" },
  { logo: githubLogo, text: "GitHub", href: "https://github.com/" },
  { logo: postmanLogo, text: "Postman", href: "https://www.postman.com/" },

  // Row 4
  { logo: figmaLogo, text: "Figma", href: "https://www.figma.com/" },
  { logo: tailwindLogo, text: "Tailwind", href: "https://tailwindcss.com/" },
  { logo: mantineLogo, text: "Mantine", href: "https://mantine.dev/" },
];

const handleCellClick = (e: React.MouseEvent<HTMLDivElement>, href: string) => {
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) {
    return;
  }
  e.preventDefault();
  window.open(href, "_blank", "noopener,noreferrer");
};

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.topText}>
        <img src={myPhoto} alt="Gab Cruz" className={styles.photo} />
        <span className={styles.greeting}>Hi! I'm Gab Cruz</span>
      </div>
      <span className={styles.heading}>
        Crafting Intuitive Interfaces That Drive User Engagement and Business
        Success.
      </span>
      <span className={styles.description}>
        I am a full-stack developer with a strong emphasis on frontend
        development and UI/UX design. My approach involves transforming ideas
        into functional, user-centric digital solutions that not only meet
        technical requirements but also deliver engaging user experiences that
        align with business objectives.
      </span>
      <div className={styles.grid}>
        {gridCells.map((cell, idx) => (
          <div
            className={styles.cell}
            key={idx}
            onClick={(e) => handleCellClick(e, cell.href)}
            style={{ cursor: "pointer" }}
          >
            <img src={cell.logo} alt={cell.text} className={styles.logo} />
            <span className={styles.cellText}>{cell.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
