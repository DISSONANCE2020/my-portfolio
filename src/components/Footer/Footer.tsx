import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.leftSection}>
        <FaEnvelope size={24} color="white" />
        <div className={styles.email}>gabrielbuenaventura2020@gmail.com</div>
      </div>
      <div className={styles.rightSection}>
        <a
          href="https://github.com/DISSONANCE2020"
          target="https://github.com/DISSONANCE2020"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          {" "}
          <FaGithub size={24} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-cruz-dsgn/"
          target="https://www.linkedin.com/in/gabriel-cruz-dsgn/"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          {" "}
          <FaLinkedin size={24} color="white" />
        </a>
      </div>
    </div>
  );
}
