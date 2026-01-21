import styles from "./ProjectsSection.module.css";

import { projects } from "./projectsContent";

export default function ProjectsSection({ showFull }: { showFull?: boolean }) {
  const visibleContent = showFull ? projects : projects.slice(0, 3);
  return (
    <section className={styles.projectsSection} id='projects'>
      <span className={styles.heading}>Projects</span>
      {visibleContent.map((project, idx) => (
        <div
          key={project.name}
          className={
            idx === visibleContent.length - 1 && showFull
              ? styles.projectLast
              : styles.project
          }
        >
          <div className={styles.imageFrame}>
            <img
              className={styles.imageStyling}
              src={project.image}
              alt={project.alt}
            />
          </div>
          <div className={styles.projectDetails}>
            <div className={styles.topRow}>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.logo}>
                {project.stack.map((item, idx) => (
                  <span key={idx}>
                    <img
                      src={item.logo}
                      alt={item.label}
                      className={styles.logo}
                    />
                  </span>
                ))}
              </span>
            </div>
            <span className={styles.projectRole}>{project.role}</span>
            <span className={styles.projectDescription}>
              {project.description}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
