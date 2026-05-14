import React, { useState } from "react";
import styled from "styled-components";
import { Mail, Phone, Github, Check, Workflow, Lightbulb, Layers, Gem } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

const BASE_URL = import.meta.env.BASE_URL;

export default function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  const items = [
    {
      icon: <Workflow size={22} />,
      title: "Development Direction",
      desc: "화면과 기능을 분리해서 보기보다, 사용자 경험과 데이터 흐름이 자연스럽게 이어지는 구조를 지향",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Problem Solving",
      desc: "기능 구현 전 흐름과 상태를 먼저 정리하고, 이후 컴포넌트 구조와 데이터 구조를 맞추는 방식으로 접근",
    },
    {
      icon: <Layers size={22} />,
      title: "Domain Interest",
      desc: "MES, 실시간 서비스, 데이터 추적처럼 흐름과 구조가 중요한 프로젝트",
    },
    {
      icon: <Gem size={22} />,
      title: "What I Value",
      desc: "완성도 있는 UI뿐 아니라 유지보수성, 명확한 구조, 실제 사용성을 함께 고려하는 개발",
    },
  ];

  return (
    <Section id="about">
      <ProfileCard>
        <ProfileImg src={`${BASE_URL}files/이현수 이력서 사진.png`} alt="이현수" />
        <ProfileInfo>
          <ProfileName>{siteConfig.name}</ProfileName>
          <Divider />
          <ContactList>
            <ContactItem>
              <Phone size={14} />
              {siteConfig.phone}
            </ContactItem>
            <ContactItem as="button" onClick={handleCopyEmail} $clickable>
              {copied ? <Check size={14} /> : <Mail size={14} />}
              {copied ? <CopiedText>이메일이 복사되었습니다</CopiedText> : siteConfig.email}
            </ContactItem>
            <ContactItem as="a" href={siteConfig.githubUrl} target="_blank" rel="noreferrer" $clickable>
              <Github size={14} />
              {siteConfig.githubUrl.replace("https://", "")}
            </ContactItem>
          </ContactList>
        </ProfileInfo>

        <VerticalDivider />

        <KeywordSection>
          <KeywordLabel>Keywords</KeywordLabel>
          <KeywordList>
            {["데이터 흐름 이해", "사용자 중심 UI", "실행력", "API 기반 화면 구현"].map((kw) => (
              <Keyword key={kw}>{kw}</Keyword>
            ))}
          </KeywordList>
        </KeywordSection>
      </ProfileCard>
      <Grid>
        {items.map((item) => (
          <SubCard key={item.title}>
            <IconWrap>{item.icon}</IconWrap>
            <SubTitle>{item.title}</SubTitle>
            <SubDesc>{item.desc}</SubDesc>
          </SubCard>
        ))}
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 80px;
  padding: 20px 0 40px;
  scroll-margin-top: 100px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 36px;
  margin-bottom: 32px;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

const ProfileImg = styled.img`
  width: 160px;
  height: 200px;
  border-radius: 16px;
  object-fit: cover;
  object-position: top;
  box-shadow: var(--shadow);
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileName = styled.h2`
  margin: 0;
  font-size: clamp(24px, 3vw, 32px);
  letter-spacing: -0.04em;
`;

const ProfileRole = styled.p`
  margin: 0;
  font-size: 16px;
  color: var(--text-soft);
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--line-soft);
  margin: 8px 0;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const VerticalDivider = styled.div`
  width: 1px;
  align-self: stretch;
  background: var(--line-soft);
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 100%;
    height: 1px;
    align-self: auto;
  }
`;

const KeywordSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 200px;
`;

const KeywordLabel = styled.p`
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #94a3b8;
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Keyword = styled.span`
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.86);
  color: #334155;
  font-size: 13px;
  font-weight: 500;
`;

const CopiedText = styled.span`
  animation: fadeOut 1s ease forwards;

  @keyframes fadeOut {
    0%   { opacity: 1; }
    60%  { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-soft);
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: ${({ $clickable }) => $clickable ? "pointer" : "default"};
  transition: color 0.2s;
  line-height: 1;

  &:hover {
    color: ${({ $clickable }) => $clickable ? "var(--primary)" : "var(--text-soft)"};
  }
`;

const CardBase = styled.div`
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
`;

const Grid = styled.div`
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 1fr));
  gap: 28px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubCard = styled(CardBase)`
  min-height: 160px;
  padding: 24px 28px;
`;

const IconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(8, 145, 178, 0.08);
  color: #0891b2;
  margin-bottom: 16px;
`;

const SubTitle = styled.h4`
  margin: 0;
  font-size: 24px;
  line-height: 1.4;
`;

const SubDesc = styled.p`
  margin: 22px 0 0;
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-soft);
  word-break: keep-all;
`;
