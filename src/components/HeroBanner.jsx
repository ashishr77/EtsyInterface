import React from "react";
import styled from "styled-components";

// Styled Components for Hero Section
const HeroSection = styled.section`
  width: 100%; /* Full width to prevent overflow */
  height: 50vw;
  min-height: 300px;
  max-height: 450px;
  background: url("https://i.etsystatic.com/ij/967256/6862525875/ij_1360x1080.6862525875_4d2sqs4r.jpg?version=0")
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 20px;
  box-sizing: border-box; /* Ensure padding doesn't add to width */

  @media (max-width: 768px) {
    height: 60vw;
    min-height: 250px;
    max-height: 350px;
    justify-content: center;
    padding: 16px; /* Slightly reduced padding on mobile */
  }
`;

const HeroContent = styled.div`
  background: rgba(255, 239, 247, 0.9);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  max-width: 400px;
  text-align: left;
  margin-left: 5%;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
    max-width: 90%;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroSubtitle = styled.p`
  color: #555;
  font-size: 1rem;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const HeroButton = styled.a`
  background: #222;
  color: #fff;
  padding: 8px 24px;
  font-weight: 600;
  border-radius: 20px;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s;

  &:hover {
    background: #444;
  }

  @media (max-width: 768px) {
    padding: 6px 20px;
    font-size: 0.9rem;
  }
`;

// Styled Components for Trends Section
const TrendsSection = styled.section`
  padding: 40px 5%;
  background: #fff;
`;

const TrendsTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TrendsSubtitle = styled.p`
  color: #555;
  font-size: 1rem;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TrendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TrendCard = styled.a`
  display: block;
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const TrendImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const TrendTitle = styled.h3`
  font-size: 1rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 500;
  margin-top: 8px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Data for Trends
const trends = [
  {
    title: "Y2K Trends",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Welcome to the Jungle",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Zoo Adventure",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Farm Fresh & Functional",
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=300&q=80",
  },
];

// Component
function HeroBanner() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>It&apos;s not too late</HeroTitle>
          <HeroSubtitle>Special gifts with speedy delivery</HeroSubtitle>
          <HeroButton href="#">Make Mum&apos;s day</HeroButton>
        </HeroContent>
      </HeroSection>

      {/* Trends Section */}
      <TrendsSection>
        <TrendsTitle>Find your new favourite trend!</TrendsTitle>
        <TrendsSubtitle>Pop culture, style, and seasonal finds</TrendsSubtitle>
        <TrendsGrid>
          {trends.map((trend) => (
            <TrendCard key={trend.title} href="#">
              <TrendImage src={trend.img} alt={trend.title} />
              <TrendTitle>{trend.title}</TrendTitle>
            </TrendCard>
          ))}
        </TrendsGrid>
      </TrendsSection>
    </>
  );
}

export default HeroBanner;