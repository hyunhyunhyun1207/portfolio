import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function HeroSection() {
  return (
    <Section>
      <Left
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <TextGroup>
          <Headline>
            <Accent>Idea to Flow</Accent>
            <br />
            {siteConfig.name}의 Portfolio
          </Headline>
          <Bio>{siteConfig.bio}</Bio>
        </TextGroup>

        <ButtonRow>
          <PrimaryButton
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
          </PrimaryButton>
          <SecondaryButton href={`mailto:${siteConfig.email}`}>
            <Mail size={16} />
            Contact
          </SecondaryButton>
        </ButtonRow>
      </Left>
    </Section>
  );
}

const Section = styled.section`
  display: block;
  margin-top: 150px;
  margin-bottom: 200px;
  scroll-margin-top: 100px;
`;

const Left = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
`;

const Headline = styled.h1`
  margin: 0;
  font-size: clamp(42px, 7vw, 72px);
  line-height: 1.08;
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    br {
      display: none;
    }
  }
`;

const Accent = styled.span`
  color: #0891b2;
`;

const Bio = styled.p`
  margin: 0;
  font-size: 18px;
  color: var(--text-soft);
  line-height: 1.7;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const LinkBase = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const PrimaryButton = styled(LinkBase)`
  background: #0f172a;
  color: #fff;

  &:hover {
    background: #1e293b;
  }
`;

const SecondaryButton = styled(LinkBase)`
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.82);
  color: var(--text);

  &:hover {
    background: #f8fafc;
  }
`;
