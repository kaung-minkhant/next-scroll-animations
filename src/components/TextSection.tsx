"use client";
import React, { useRef } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={textRef}>
      <p>{children}</p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        laboriosam.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        laboriosam.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        laboriosam.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        laboriosam.
      </TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 3rem;
  }
`;

export default TextSection;
