"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Button from "../button/button";
import styled from "styled-components";
import { Wallet, Rocket } from "lucide-react";
import { Abril_Fatface } from "next/font/google";
import use3DHover from "@/utils/hooks/use3DHover";
import { useRef } from "react";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const imageDivRef = useRef<HTMLDivElement>(null);
  const { transform, transition, isHovering } = use3DHover({
    ref: imageDivRef,
    scale: {
      x: 30,
      y: -20,
      z: 20,
    },
  });
  return (
    <HeaderStyled>
      <nav className="nav">
        <div className="logo">
          <Image src={logo} alt="logo" width={36} />
          <h2>Logo</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="nav-items">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>Marketplace</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
          <Button name="Connect Wallet" icon={<Wallet size={23} />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Buy, collect, and sell extraordinary NFTs
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            fugit iusto. Dicta quibusdam laboriosam ratione, molestias numquam
            necessitatibus accusantium vero id nesciunt totam voluptate deserunt
            beatae facere corrupti error. Facere veniam impedit illo deleniti
            optio fuga ipsam facilis excepturi provident. Harum voluptate culpa
            consectetur provident velit nesciunt rem expedita eaque!
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<Rocket size={23} />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content" ref={imageDivRef}>
          {!isHovering && <HoverMeStyled>Hover Me</HoverMeStyled>}
          <div
            className="image"
            style={{
              transform: transform,
              transition: transition,
            }}
          >
            <Image
              src="/images/monkey.png"
              alt="monkey"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HoverMeStyled = styled.div`
  position: absolute;
  font-size: 30px;
  z-index: 51;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-border);
  opacity: 0.9;
  padding: 10px 20px;
  border-radius: 10px;
`;

const HeaderStyled = styled.header`
  .nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }
    .nav-items {
      display: flex;
      gap: 2rem;
      align-items: center;

      li {
        transform: all 0.2s ease-in-out;
        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
    .input {
      flex-grow: 2;
      display: flex;
      justify-content: center;
      input {
        width: 50%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);
    padding: 0 10rem 5rem 10rem;

    .text-content {
      width: 70%;
      > h1 {
        font-size: clamp(2rem, 4vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }
      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }
    }

    .image-content {
      position: relative;
      .image {
        border: 1px solid var(--color-border);
        background-color: var(--color-bg);
        border-radius: 8px;
        overflow: hidden;
        padding: 1rem;
      }
      img {
        border-radius: 8px;
      }
    }
  }
`;
