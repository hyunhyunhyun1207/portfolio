import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../../data/siteConfig";

export default function IntroOverlay({ onComplete }) {
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const bioTimer = setTimeout(() => setShowBio(true), 1400);
    const doneTimer = setTimeout(onComplete, 3200);
    return () => {
      clearTimeout(bioTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <Overlay
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <TextWrap layout>
        <NameGroup
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, layout: { duration: 0.6, ease: "easeInOut" } }}
        >
          <Greeting>안녕하세요</Greeting>
          <NameLine>
            <Accent>{siteConfig.name}</Accent>입니다
          </NameLine>
        </NameGroup>

        <AnimatePresence>
          {showBio && (
            <Bio
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {siteConfig.bio}
            </Bio>
          )}
        </AnimatePresence>
      </TextWrap>
    </Overlay>
  );
}

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
`;

const TextWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

const NameGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Greeting = styled.p`
  margin: 0;
  font-size: clamp(20px, 3vw, 28px);
  color: var(--text-soft);
  font-weight: 400;
`;

const NameLine = styled.h1`
  margin: 0;
  font-size: clamp(40px, 7vw, 72px);
  letter-spacing: -0.04em;
  line-height: 1.1;
`;

const Accent = styled.span`
  color: #0891b2;
`;

const Bio = styled(motion.p)`
  margin: 0;
  font-size: clamp(15px, 2vw, 18px);
  color: var(--text-muted);
`;
