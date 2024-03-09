"use client";

import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
}
function Card({ title, description, image }: Props) {
  return (
    <CardStyled>
      <div
        className="image"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <p className="new">New</p>
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Image
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="overlay"></div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  background-color: var(--color-bg);
  height: 100%;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease-in-out;

  .new {
    position: absolute;
    right: 2.5rem;
    top: 3rem;
    background-color: #222260;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
  }
  .text {
    position: absolute;
    bottom: 3rem;
    left: 2.5rem;
    h3 {
      display: inline-block;
      font-size: 1.5rem;
      color: #f2994a;
      background-color: var(--color-bg);
      padding: 0.2rem 1rem;
      border-radius: 30px;;
      margin-bottom: 0.5rem;
      border: 1px solid var(--color-border);
    }
  }

  .overlay {
    position: absolute;
    background: linear-gradient(0deg, #111111 1%, rgba(17, 17, 17, 0.06) 99%);
    bottom: 2%;
    width: calc(100% - 3rem);
    height: 30px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default Card;
