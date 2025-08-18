import styles from "./ExperienceSection.module.css";
import { experiences } from "./experienceContent";

export default function ExperienceSection({
  showFull,
}: {
  showFull?: boolean;
}) {
  const visibleExperiences = showFull ? experiences : experiences.slice(0, 3);

  return (
    <section className={styles.experienceSection} id="experience">
      <span className={styles.heading}>Experience</span>
      {visibleExperiences.map((exp, idx) => (
        <div
          className={
            idx === visibleExperiences.length - 1 && showFull
              ? styles.positionWholeLast
              : styles.positionWhole
          }
          key={exp.position + exp.organization}
        >
          <div className={styles.positionHeader}>
            <img src={exp.logo} alt={exp.logoAlt} className={styles.photo} />
            <div className={styles.title}>
              <span className={styles.position}>{exp.position}</span>
              <span className={styles.organization}>{exp.organization}</span>
            </div>
          </div>
          <span className={styles.description}>{exp.description}</span>
          <span className={styles.date}>{exp.date}</span>
        </div>
      ))}
    </section>
  );
}
