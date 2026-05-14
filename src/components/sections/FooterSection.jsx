import React from "react";
import styled from "styled-components";
import { Github, Mail, Phone } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function FooterSection() {
  return (
    <Footer>
      <Inner>
        <Name>{siteConfig.name}</Name>
        <Bio>{siteConfig.bio}</Bio>

        <LinkRow>
          <ContactLink
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            {siteConfig.githubUrl.replace("https://", "")}
          </ContactLink>
          <ContactLink href={`mailto:${siteConfig.email}`}>
            <Mail size={16} />
            {siteConfig.email}
          </ContactLink>
          <ContactItem>
            <Phone size={16} />
            {siteConfig.phone}
          </ContactItem>
        </LinkRow>

        <Divider />
       
      </Inner>
    </Footer>
  );
}

const Footer = styled.footer`
  margin-top: 120px;
  padding: 64px 0;
  border-top: 1px solid var(--line-soft);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
`;

const Name = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--text);
`;

const Bio = styled.p`
  margin: 0;
  font-size: 15px;
  color: var(--text-soft);
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 8px;
`;

const ContactBase = `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.82);
  color: var(--text-soft);
  font-size: 14px;
`;

const ContactItem = styled.span`
  ${ContactBase}
`;

const ContactLink = styled.a`
  ${ContactBase}
  transition: all 0.2s ease;

  &:hover {
    color: var(--text);
    background: #f8fafc;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid var(--line-soft);
  margin: 16px 0 0;
`;

const Copy = styled.p`
  margin: 0;
  font-size: 13px;
  color: var(--text-muted);
`;
