"use client";

import use3DHover from "@/utils/hooks/use3DHover";
import Image from "next/image";
import { useRef } from "react";
import styled from "styled-components";

function ZoomSection() {
  const backgroundDivRef = useRef<HTMLDivElement>(null);
  const { transform: rootTransform, transition: rootTransition } = use3DHover({
    ref: backgroundDivRef,
    scale: {
      x: 5,
      y: 10,
      z: 4,
    },
  });
  const { transform: leftTransform, transition: leftTransition } = use3DHover({
    ref: backgroundDivRef,
    scale: {
      x: 40,
      y: 20,
      z: 7,
    },
  });
  const { transform: rightTransform, transition: rightTransition } = use3DHover(
    {
      ref: backgroundDivRef,
      scale: {
        x: -40,
        y: -20,
        z: -7,
      },
    }
  );
  return (
    <ZoomSectionStyled ref={backgroundDivRef}>
      <div
        className="bg-image"
        style={{
          height: "40rem",
          width: "100%",
        }}
      >
        <Image
          src="/images/spiral.svg"
          alt="spiral background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: rootTransform,
            scale: 1.2,
            background: "var(--color-bg)",
          }}
        />
        <div className="left-image">
          <Image
            src="/images/arm2.jpg"
            alt="bulb tree"
            className="monkey"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transform: leftTransform,
            }}
          />
        </div>
        <div className="right-image">
          <Image
            src="/images/arm2.jpg"
            alt="bulb tree"
            className="monkey"
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transform: rightTransform,
            }}
          />
        </div>
      </div>
    </ZoomSectionStyled>
  );
}

const ZoomSectionStyled = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  .bg-image {
    position: relative;
  }
  .left-image {
    position: absolute;
    width: 300px;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }
  .right-image {
    position: absolute;
    width: 300px;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }
`;
export default ZoomSection;
