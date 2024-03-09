"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../../public/logo.png";
import footer from "../utils/footer";
import { Github, Twitter, Instagram, Linkedin, MoveRight } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <FooterStyled>
      <nav>
        <div className="footer-left">
          <div className="logo">
            <Image src={Logo} alt="logo" width={36} />
            <h2>Logo</h2>
          </div>
          <div className="input">
            <input type="text" placeholder="Subscribe here..." />
            <button><MoveRight size={20} strokeWidth={2} /></button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            optio quas minima non officia laboriosam nam. Dolorem suscipit
            soluta velit.
          </p>
          <div className="socials">
            <Github />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="links">
          {footer.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <ul>
                  {item.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link href={link.link}>{link.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
      <div className="rights">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  position: relative;
  z-index: 10;
  padding: 5rem 10rem 0 10rem;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);
  nav {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    .footer-left {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 50%;
      .logo {
        display: flex;
        gap: 0.6rem;
        align-items: center;
      }
      .input {
        position: relative;
        input {
          width: 100%;
          padding: 1rem 1rem;
          border: 1px solid var(--color-border);
          background-color: var(--color-bg);
          border-radius: 8px;

          &::placeholder {
            font-size: 20;
            font-weight: 500;
          }
        }
        button {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: white;
            transform: translateY(-50%) translateX(0.5rem);
          }
        }
      }
      .socials {
        display: flex;
        gap: 1.5rem;
        svg {
          cursor: pointer;
        }
      }
    }
    .links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      h3 {
        font-weight: 600;
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
      }
      li:not(:last-child) {
        margin-bottom: 0.7rem;
      }
    }
  }
  .rights {
    padding: 2rem 0;
  }
`;

export default Footer;
