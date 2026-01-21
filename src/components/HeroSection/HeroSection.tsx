import { Flex } from "@mantine/core";
import styles from "./HeroSection.module.css";
import myPhoto from "../../assets/images/HeroSection/myPhoto.png";

import { gridCells } from "./heroContent";

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
      <Flex className={styles.headingSection}>
        <div className={styles.topText}>
          <img src={myPhoto} alt='Gab Cruz' className={styles.photo} />
          <span className={styles.greeting}>Hi! I'm Gab</span>
        </div>
        <span className={styles.heading}>
          Crafting Intuitive Interfaces That Drive User Engagement and Business
          Success.
        </span>
        <span className={styles.description}>
          I am a full-stack developer with a strong emphasis on frontend
          development and UI/UX design. 
          My approach involves transforming ideas
          into functional, user-centric digital solutions that not only meet
          technical requirements but also deliver engaging user experiences that
          align with business objectives.
        </span>
      </Flex>

      <div className={styles.gridContainer}>
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
      </div>
    </section>
  );
}
