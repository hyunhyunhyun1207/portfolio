import React, { useState, useCallback, useEffect } from "react";
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
import SectionReveal from "./components/common/SectionReveal";

export default function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const handleIntroComplete = useCallback(() => setIntroVisible(false), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <SectionReveal><AboutSection /></SectionReveal>
          <SectionReveal><StackSection /></SectionReveal>
          <SectionReveal><ProjectsSection /></SectionReveal>
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
  padding: 32px 0 120px;

  @media (max-width: 768px) {
    width: min(var(--max-width), calc(100% - 32px));
  }
`;
