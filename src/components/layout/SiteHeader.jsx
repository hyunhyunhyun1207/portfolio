import React from "react";
import styled from "styled-components";
import { Github } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function SiteHeader() {
  return (
    <Header>
      <Inner>
        <SiteName href="#">{siteConfig.portfolioTitle}</SiteName>

        <RightArea>
          <Nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#stack">Stack</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </Nav>

          <GithubLink
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
          </GithubLink>
        </RightArea>
      </Inner>
    </Header>
  );
}

const Header = styled.header`
  position: sticky;
  top: 20px;
  z-index: 30;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
  width: min(860px, calc(100% - 48px));
`;

const SiteName = styled.a`
  padding: 4px 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled.a`
  padding: 10px 14px;
  border-radius: 999px;
  color: var(--text-soft);
  font-size: 14px;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: var(--text);
  }
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.82);
  color: var(--text);
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: #f8fafc;
  }
`;
