import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import SectionDivider from "./components/SectionDivider";
import "./styles/global.css";

export default function App() {
  const [showFullExperience, setShowFullExperience] = useState(false);

  return (
    <MantineProvider>
      <div
        className="app-background"
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: 'url("/background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderBar />
        <HeroSection />
        <SectionDivider />
        <ExperienceSection showFull={showFullExperience} />
        <SectionDivider>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.5rem",
                borderRadius: "999px",
                border: "none",
                background: "#2f3358ff",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
              onClick={() => setShowFullExperience((prev) => !prev)}
            >
              {showFullExperience ? (
                <FaChevronUp size={18} />
              ) : (
                <FaChevronDown size={18} />
              )}
            </button>
          </div>
        </SectionDivider>
        <ProjectsSection />
        <SectionDivider />
        <ContactSection />
        <SectionDivider />
        <Footer />
      </div>
    </MantineProvider>
  );
}
