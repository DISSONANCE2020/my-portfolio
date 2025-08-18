import styles from "./ProjectsSection.module.css";

import { projects } from "./projectsContent";

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection} id="projects">
      <span className={styles.heading}>Projects</span>
      {projects.map((project) => (
        <div
          key={project.name}
          className={project.last ? styles.projectLast : styles.project}
        >
          <div className={styles.imageFrame}>
            <img
              className={styles.imageStyling}
              src={project.image}
              alt={project.alt}
            />
          </div>
          <div className={styles.projectDetails}>
            <span className={styles.projectName}>{project.name}</span>
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
