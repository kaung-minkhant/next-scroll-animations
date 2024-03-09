"use client";
import Header from "@/components/header/header";
import SectionLayout from "@/components/layouts/SectionLayout";
import styled from "styled-components";
import { cards } from "@/utils/cards";
import Card from "@/components/card/card";
import FullPage from "@/components/fullpage";
import TextSection from "@/components/TextSection";
import Footer from "@/components/footer";
import ZoomSection from "@/components/ZoomSection";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <div className="cards">
            {cards.map((card, index) => {
              return <Card key={index} {...card} />;
            })}
          </div>
        </SectionLayout>
        <FullPage />
        <SectionLayout>
          <div className="cards">
            {cards.map((card, index) => {
              return <Card key={index} {...card} />;
            })}
          </div>
        </SectionLayout>
        <SectionLayout>
          <TextSection />
        </SectionLayout>
        <SectionLayout>
          <div className="video">
            <iframe
              src="https://www.youtube.com/watch?v=Dlxc5g6hMg8"
              title="music"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </SectionLayout>
        <SectionLayout>
          <ZoomSection />
        </SectionLayout>
        <SectionLayout>
          <TextSection />
        </SectionLayout>
        <Footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;
  .cards {
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }
  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      width: 100%;
      height: 30rem;
      border: none;
    }
  }
`;
