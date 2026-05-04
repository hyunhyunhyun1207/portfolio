import React from "react";
import styled from "styled-components";

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
        <StackCard>
          <CardTitle>Frontend</CardTitle>
          <CardDesc>화면 구성, 인터랙션, UI 설계 중심</CardDesc>
          <TechList>
            <TechChip>Html</TechChip>
            <TechChip>JS6</TechChip>
            <TechChip>React</TechChip>
            <TechChip>Vite</TechChip>
            <TechChip>Styled-components</TechChip>
            <TechChip>Recharts</TechChip>
          </TechList>
        </StackCard>

        <StackCard>
          <CardTitle>Backend</CardTitle>
          <CardDesc>비즈니스 로직, 인증, 데이터 처리 중심</CardDesc>
          <TechList>
            <TechChip>Java</TechChip>
            <TechChip>Python</TechChip>
            <TechChip>Spring Boot</TechChip>
            <TechChip>JPA</TechChip>
            <TechChip>JWT</TechChip>
            <TechChip>WebSocket</TechChip>
          </TechList>
        </StackCard>

        <StackCard>
          <CardTitle>Database / Infra</CardTitle>
          <CardDesc>데이터 구조, 저장, 시스템 연결 영역</CardDesc>
          <TechList>
            <TechChip>Oracle</TechChip>
            <TechChip>MySQL</TechChip>
            <TechChip>ERD Modeling</TechChip>
            <TechChip>REST API</TechChip>
            <TechChip>GitHub</TechChip>
          </TechList>
        </StackCard>
      </StackGrid>
    </Section>
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

const Desc = styled.p`
  margin: 0;
  max-width: 560px;
  line-height: 1.8;
  color: var(--text-soft);
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1100px) {
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
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
`;

const TechChip = styled.span`
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #334155;
  font-size: 14px;
  font-weight: 500;
`;
