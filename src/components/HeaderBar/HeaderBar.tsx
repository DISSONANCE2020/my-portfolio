import React from "react";
import styles from "./HeaderBar.module.css";

const navItems = [
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
]

export default function HeaderBar() {

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const section = document.getElementById(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
};

  return (
    <header className={styles.headerBar}>
      <div className={styles.inner}>
        {/* {Left Side} */}
        <div className={styles.left}>
          <span className={styles.name}>Gab Cruz</span>
          <span className={styles.location}>Bataan, Philippines</span>
        </div>
        {/* {Right Side} */}
        <nav className={styles.nav}>
          <ul style={{ display: "flex", gap: "1rem", margin: 0, padding: 0, listStyle: "none" }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a className={styles.navButton} href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
