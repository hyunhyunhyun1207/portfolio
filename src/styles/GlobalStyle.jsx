import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #f5f9ff;
    --bg-soft: rgba(255, 255, 255, 0.72);
    --bg-strong: #ffffff;
    --text: #0f172a;
    --text-soft: #475569;
    --text-muted: #94a3b8;
    --line: rgba(255, 255, 255, 0.8);
    --line-soft: #d9e6f5;
    --primary: #0891b2;
    --primary-soft: #ecfeff;
    --shadow: 0 12px 32px rgba(15, 23, 42, 0.06);
    --shadow-strong: 0 20px 60px rgba(15, 23, 42, 0.10);
    --radius-xl: 32px;
    --radius-lg: 24px;
    --radius-md: 18px;
    --max-width: 1280px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
}

  body {
    margin: 0;
    min-width: 320px;
    font-family: Inter, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: var(--bg);
    color: var(--text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  #root {
    min-height: 100vh;
  }

  ::selection {
    background: rgba(165, 243, 252, 0.75);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #edf4ff;
  }

  ::-webkit-scrollbar-thumb {
    background: #c7d9f5;
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a9c3ea;
  }
`;

export default GlobalStyle;
