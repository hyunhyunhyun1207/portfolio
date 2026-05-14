import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiStyledcomponents,
  SiSpringboot, SiPython, SiMysql, SiGithub,
  SiIntellijidea, SiFigma, SiPostman, SiNotion, SiOpenai, SiClaude,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbChartBar, TbBrandVscode, TbDatabase } from "react-icons/tb";

const stacks = [
  {
    title: "Frontend",
    desc: "화면 구성, 인터랙션, UI 설계 중심",
    barColor: "linear-gradient(90deg, #3b82f6, #06b6d4)",
    skills: [
      { name: "Html, CSS", level: 83, icon: <><SiHtml5 color="#E34F26" /><SiCss color="#1572B6" /></> },
      { name: "JavaScript", level: 78, icon: <SiJavascript color="#F7DC6F" /> },
      { name: "React", level: 90, icon: <SiReact color="#61DAFB" /> },
      { name: "Styled-components", level: 80, icon: <SiStyledcomponents color="#DB7093" /> },
      { name: "Recharts", level: 65, icon: <TbChartBar color="#0891b2" /> },
    ],
  },
  {
    title: "Backend",
    desc: "비즈니스 로직, 인증, 데이터 처리 중심",
    barColor: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    skills: [
      { name: "Java", level: 74, icon: <FaJava color="#ED8B00" /> },
      { name: "C#", level: 67, icon: <TbBrandCSharp color="#9B4F96" /> },
      { name: "Python", level: 72, icon: <SiPython color="#3776AB" /> },
      { name: "Spring Boot", level: 72, icon: <SiSpringboot color="#6DB33F" /> },
    ],
  },
  {
    title: "Database / Infra",
    desc: "데이터 구조, 저장, 시스템 연결 영역",
    barColor: "linear-gradient(90deg, #0891b2, #0d9488)",
    skills: [
      { name: "Oracle", level: 72, icon: <TbDatabase color="#F80000" /> },
      { name: "MySQL", level: 76, icon: <SiMysql color="#4479A1" /> },
      { name: "GitHub", level: 89, icon: <SiGithub color="#181717" /> },
    ],
  },
  {
    title: "Tools",
    desc: "개발 환경, 협업, 디자인 도구",
    type: "chip",
    skills: [
      { name: "VS Code", level: 90, icon: <TbBrandVscode color="#007ACC" /> },
      { name: "IntelliJ", level: 80, icon: <SiIntellijidea color="#FE315D" /> },
      { name: "Figma", level: 65, icon: <SiFigma color="#F24E1E" /> },
      { name: "Postman", level: 75, icon: <SiPostman color="#FF6C37" /> },
      { name: "Notion", level: 85, icon: <SiNotion color="#000000" /> },
      { name: "GPT · Claude", icon: <><SiOpenai color="#10a37f" /><SiClaude color="#d97706" /></> },
    ],
  },
];

export default function StackSection() {
  return (
    <Section id="stack">
      <Top>
        <div>
          <Label>Stack</Label>
          <Title>기술 스택</Title>
        </div>
      </Top>

      <StackGrid>
        {stacks.map((card) => (
          <StackCard key={card.title}>
            <CardTitle>{card.title}</CardTitle>
            <CardDesc>{card.desc}</CardDesc>
            {card.type === "chip" ? (
              <ChipList>
                {card.skills.map((skill) => (
                  <ToolChip key={skill.name}>
                    <IconWrap>{skill.icon}</IconWrap>
                    {skill.name}
                  </ToolChip>
                ))}
              </ChipList>
            ) : (
              <TechList>
                {card.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} barColor={card.barColor} />
                ))}
              </TechList>
            )}
          </StackCard>
        ))}
      </StackGrid>
    </Section>
  );
}

function SkillBar({ name, level, icon, barColor }) {
  return (
    <SkillRow>
      <SkillMeta>
        <SkillLeft>
          <IconWrap>{icon}</IconWrap>
          <SkillName>{name}</SkillName>
        </SkillLeft>
        <SkillLevel>{level}</SkillLevel>
      </SkillMeta>
      <BarTrack>
        <BarFill
          $color={barColor}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </BarTrack>
    </SkillRow>
  );
}

const Section = styled.section`
  margin-top: 96px;
  margin-bottom: 150px;
  scroll-margin-top: 100px;
`;

const Top = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.p`
  margin: 0;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #94a3b8;
`;

const Title = styled.h3`
  margin: 10px 0 0;
  font-size: clamp(32px, 4vw, 42px);
`;

const StackGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StackCard = styled.div`
  padding: 28px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
`;

const CardTitle = styled.h4`
  margin: 0;
  font-size: 24px;
`;

const CardDesc = styled.p`
  margin: 12px 0 0;
  line-height: 1.7;
  color: var(--text-soft);
  font-size: 14px;
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 22px;
`;

const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
`;

const ToolChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.86);
  color: #334155;
  font-size: 14px;
  font-weight: 500;
`;

const SkillRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 16px;
`;

const SkillName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #334155;
`;

const SkillLevel = styled.span`
  font-size: 12px;
  color: #475569;
`;

const BarTrack = styled.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
`;

const BarFill = styled(motion.div)`
  height: 100%;
  background: ${({ $color }) => $color};
  border-radius: 999px;
`;
