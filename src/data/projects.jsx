const BASE_URL = import.meta.env.BASE_URL;

export const projects = [
  {
    title: "MES for Battery Manufacturing",
    subtitle: "스마트팩토리형 제조 실행 시스템",
    description:
      "12V 배터리 생산 공정을 기준으로 작업지시, 공정 추적, LOT 관리, 설비 모니터링, 품질 로그, 재고 흐름까지 연결한 종합 MES 프로젝트입니다.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Styled-components",
      "Recharts",
    ],
    type: "featured",
    status: "대표 프로젝트",
    mediaLabel: "프로젝트 시연 영상",
    githubUrl: "https://github.com/mes-team-2",
    pdfUrl: `${BASE_URL}files/2조 Z-zone Battery.pdf`,
    videoUrl: `${BASE_URL}files/new_2조.mp4`,
  },
  {
    title: "Dynamic Pricing System",
    subtitle: "실시간 가격·재고 최적화 자동화",
    description:
      "수요·경쟁가·재고 데이터를 실시간으로 분석해 최적 판매가를 자동 산출하고, 재고 소진 예측 기반의 발주 자동화까지 연결한 풀스택 다이내믹 프라이싱 시스템입니다.",
    tech: ["React", "Python", "FastAPI", "MySQL", "Styled-components", "Recharts"],
    type: "featured",
    status: "대표 프로젝트",
    mediaLabel: "프로젝트 발표 자료",
    githubUrl: "https://github.com/team1-final-project/frontend",
    pdfUrl: `${BASE_URL}files/실시간 다이내믹 프라이싱 및 재고 최적화 자동화 시스템.pdf`,
    videoUrl: `${BASE_URL}files/Stocker_compressed.mp4`,
  },
  {
    title: "Fire Safety Prediction",
    subtitle: "ML·LLM 기반 화재 예측 웹 솔루션",
    description:
      "머신러닝과 LLM을 결합해 화재 발생 위험도를 예측하고, 예측 결과를 직관적으로 시각화한 웹 솔루션입니다.",
    tech: ["React", "Python", "ML", "FastAPI", "OpenAI API", "Styled-components"],
    type: "card",
    status: "AI 서비스",
    githubUrl: "https://github.com/team3-project-A",
    pdfUrl: `${BASE_URL}files/화재_세이프티_예측_웹솔루션_(ML,LLM).pdf`,
  },
  {
    title: "Realtime Auction Platform",
    subtitle: "웹소켓 기반 실시간 경매 서비스",
    description:
      "입찰 흐름, 실시간 채팅, 경매 상태 전환, 마이페이지를 중심으로 구현한 웹소켓 기반 경매 플랫폼입니다.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "WebSocket",
      "JWT",
      "Styled-components",
      "Recharts",
    ],
    type: "card",
    status: "실시간 서비스",
    githubUrl: "https://github.com/ycj3294-glitch/zubzub_react",
    pdfUrl: `${BASE_URL}files/양1이4-최종-발표-자료.pdf`,
  },
];
