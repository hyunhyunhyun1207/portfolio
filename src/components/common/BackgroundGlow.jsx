import React from "react";
import styled, { keyframes } from "styled-components";

export default function BackgroundGlow() {
  return (
    <Wrap>
      <GlowTopLeft />
      <GlowTopRight />
      <GlowBottom />
      <GridOverlay />
    </Wrap>
  );
}

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(40px, -30px) scale(1.08); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  40%       { transform: translate(-50px, 30px) scale(1.1); }
  70%       { transform: translate(20px, -20px) scale(0.92); }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%       { transform: translate(30px, -40px) scale(1.06); }
`;

const Wrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const GlowBase = styled.div`
  position: absolute;
  border-radius: 999px;
  filter: blur(90px);
`;

const GlowTopLeft = styled(GlowBase)`
  left: -10%;
  top: -15%;
  width: 34rem;
  height: 34rem;
  background: rgba(165, 243, 252, 0.75);
  animation: ${float1} 6s ease-in-out infinite;
`;

const GlowTopRight = styled(GlowBase)`
  right: -10%;
  top: 8%;
  width: 28rem;
  height: 28rem;
  background: rgba(186, 230, 253, 0.6);
  animation: ${float2} 8s ease-in-out infinite;
`;

const GlowBottom = styled(GlowBase)`
  left: 20%;
  bottom: -10%;
  width: 26rem;
  height: 26rem;
  background: rgba(224, 231, 255, 0.85);
  animation: ${float3} 5s ease-in-out infinite;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.16) 1px, transparent 1px);
  background-size: 44px 44px;
`;
