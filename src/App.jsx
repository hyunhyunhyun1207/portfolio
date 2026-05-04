import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import BackgroundGlow from "./components/common/BackgroundGlow";
import IntroOverlay from "./components/common/IntroOverlay";
import SiteHeader from "./components/layout/SiteHeader";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import StackSection from "./components/sections/StackSection";
import FooterSection from "./components/sections/FooterSection";

export default function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const handleIntroComplete = useCallback(() => setIntroVisible(false), []);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        {introVisible && (
          <IntroOverlay onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      <AppShell>
        <BackgroundGlow />
        <Container>
          <SiteHeader />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <StackSection />
          <FooterSection />
        </Container>
      </AppShell>
    </>
  );
}

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
`;

const Container = styled.div`
  position: relative;
  width: min(var(--max-width), calc(100% - 48px));
  margin: 0 auto;
  padding: 32px 0;

  @media (max-width: 768px) {
    width: min(var(--max-width), calc(100% - 32px));
  }
`;
