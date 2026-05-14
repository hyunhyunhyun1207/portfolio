import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FileText, Github, PlayCircle } from "lucide-react";

export default function ProjectCard({ project, idx }) {
  const pdfPreviewUrl = project.pdfUrl
    ? `${project.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`
    : "";

  return (
    <MotionWrap
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: idx * 0.08 }}
    >
      <Card>
        <Grid featured={project.type === "featured"}>
          <Left>
            <TopRow>
              <Status>{project.status}</Status>
              <Subtitle>{project.subtitle}</Subtitle>
            </TopRow>

            <Title>{project.title}</Title>
            <Description>{project.description}</Description>

            <ChipRow>
              {project.tech.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ChipRow>

            <ButtonRow>
              <PrimaryLink
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <Github size={16} />
              </PrimaryLink>

              <SecondaryLink
                href={project.pdfUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>PDF 보기</span>
                <FileText size={16} />
              </SecondaryLink>

              {project.videoUrl && (
                <SecondaryLink
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>영상 보기</span>
                  <PlayCircle size={16} />
                </SecondaryLink>
              )}
            </ButtonRow>
          </Left>

          <Right>
            {project.type === "featured" ? (
              <FeaturedMedia>
                {project.videoUrl ? (
                  <VideoBox
                    src={project.videoUrl}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <FallbackBox>
                    <PlayCircle size={56} />
                    <MediaTitle>{project.mediaLabel}</MediaTitle>
                    <MediaDesc>
                      영상 파일을 연결하면 이 영역에 미리보기가 표시됩니다.
                    </MediaDesc>
                  </FallbackBox>
                )}
              </FeaturedMedia>
            ) : (
              <SnapshotArea>
                <SnapshotCard>
                  <SnapshotLabel>Project Document</SnapshotLabel>

                  {project.pdfUrl ? (
                    <PdfFrame
                      src={pdfPreviewUrl}
                      title={`${project.title} PDF Preview`}
                    />
                  ) : (
                    <SnapshotBox />
                  )}
                </SnapshotCard>
              </SnapshotArea>
            )}
          </Right>
        </Grid>
      </Card>
    </MotionWrap>
  );
}

const MotionWrap = styled(motion.div)``;

const Card = styled.div`
  overflow: hidden;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(18px);
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  padding: 24px;
  border-top: 1px solid var(--line-soft);

  @media (min-width: 1101px) {
    border-top: none;
    border-left: 1px solid var(--line-soft);
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 12px;
`;

const Status = styled(Pill)`
  border: 1px solid #bae6fd;
  background: #ecfeff;
  color: #0e7490;
`;

const Subtitle = styled(Pill)`
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.82);
  color: #64748b;
`;

const Title = styled.h4`
  margin: 0;
  font-size: clamp(28px, 4vw, 38px);
`;

const Description = styled.p`
  margin: 16px 0 0;
  max-width: 760px;
  line-height: 1.8;
  color: var(--text-soft);
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

const Chip = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.86);
  color: #475569;
  font-size: 12px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
  padding-top: 32px;
`;

const LinkBase = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 20px;
  border-radius: 999px;
  transition: all 0.2s ease;
`;

const PrimaryLink = styled(LinkBase)`
  background: #0f172a;
  color: #fff;

  &:hover {
    background: #1e293b;
  }
`;

const SecondaryLink = styled(LinkBase)`
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.82);
  color: var(--text);

  &:hover {
    background: #f8fafc;
  }
`;

const FeaturedMedia = styled.div`
  height: 330px;
  overflow: hidden;
  border-radius: 26px;
`;

const VideoBox = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 26px;
  border: 1px solid #d9e6f5;
  background: #000;
  object-fit: cover;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
`;

const FallbackBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  padding: 24px;
  text-align: center;
  border-radius: 26px;
  border: 1px solid #d9e6f5;
  background:
    radial-gradient(circle at top, rgba(34, 211, 238, 0.16), transparent 35%),
    linear-gradient(145deg, #ffffff, #edf5ff);
  color: #0891b2;
`;

const MediaTitle = styled.p`
  margin: 16px 0 0;
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
`;

const MediaDesc = styled.p`
  margin: 8px 0 0;
  color: var(--text-soft);
  font-size: 14px;
`;

const SnapshotArea = styled.div`
  display: grid;
  gap: 16px;
  height: 100%;
`;

const SnapshotCard = styled.div`
  padding: 20px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.82);
`;

const SnapshotLabel = styled.p`
  margin: 0;
  font-size: 14px;
  color: #94a3b8;
`;

const PdfFrame = styled.iframe`
  width: 100%;
  height: 270px;
  margin-top: 16px;
  border: 1px solid #dbe4f0;
  border-radius: 20px;
  background: #fff;
`;

const SnapshotBox = styled.div`
  height: 320px;
  margin-top: 16px;
  border-radius: 20px;
  border: 1px dashed #cbd5e1;
  background: linear-gradient(135deg, #ecfeff, #ffffff);
`;
