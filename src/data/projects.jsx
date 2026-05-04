const BASE_URL = import.meta.env.BASE_URL;

export const projects = [
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
    pdfUrl: `${BASE_URL}files/(최종 발표) 2조 Z-zone Battery.pdf`,
    videoUrl: `${BASE_URL}files/new_2조.mp4`,
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
  {
    title: "Blog Platform",
    subtitle: "콘텐츠 중심 블로그형 프로젝트",
    description:
      "카테고리, 게시글, 댓글, 이미지 구조를 바탕으로 CRUD와 화면 흐름을 정리한 블로그 형식 프로젝트입니다.",
    tech: ["HTML", "CSS", "JS", "Java", "JDBC", "Oracle DB"],
    type: "card",
    status: "콘텐츠 서비스",
    githubUrl: "https://github.com/Post-it-blog/post-it",
    pdfUrl: `${BASE_URL}files/2조 POST-IT.pdf`,
  },
];
