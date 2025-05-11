import React from "react";
import styled from "styled-components";

// Styled Components for Category Grid Section
const Section = styled.section`
  padding: 40px 5%;
  background: #fff;
`;

const CategoriesTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const CategoryCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const CategoryTitle = styled.span`
  font-size: 0.9rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  text-align: center;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Styled Components for Deals Section
const DealsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const DealsTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Timer = styled.span`
  font-size: 0.9rem;
  color: #555;
  font-family: "Arial", sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const DealsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const DealCard = styled.a`
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const DealImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const DealInfo = styled.div`
  padding: 12px;
`;

const DealTitle = styled.h3`
  font-size: 0.9rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const DealRating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const section2= styled.div`
  margin-left: 40px;
  margin-right: 40px;
`;

const DealPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CurrentPrice = styled.span`
  color: #222;
  font-weight: 600;
`;

const OriginalPrice = styled.span`
  color: #777;
  text-decoration: line-through;
`;

const Discount = styled.span`
  background: #e6f4ea;
  color: #2e7d32;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const DealTag = styled.div`
  font-size: 0.8rem;
  color: #555;
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f8f8f8;
  }

  &:first-of-type {
    left: -50px;
  }

  &:last-of-type {
    right: -50px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

// Data
const categories = [
  { title: "Mother's Day Gifts", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=200&q=80" },
  { title: "Clothing Gifts", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=200&q=80" },
  { title: "Personalised Necklaces", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80" },
  { title: "Wall Art", img: "https://metalkart.in/cdn/shop/products/eternal-vine-premium-wall-art-52-x-28-inches-132710.jpg?v=1663831977" },
  { title: "Gifts for Grandma", img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=200&q=80" },
  { title: "Affordable Gifts for Mum", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" },
];

const deals = [
  {
    title: "Personalized MAMA Sweatshirt",
    img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80",
    rating: 4.8,
    price: 2119,
    originalPrice: 3520,
    discount: "40% off",
    tag: "Biggest sale in 60+ days",
  },
  {
    title: "Adventure Book Scrapbook",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80",
    rating: 5.0,
    price: 2837,
    originalPrice: 4700,
    discount: "40% off",
    tag: "Biggest sale in 60+ days",
  },
  {
    title: "Charm Keychain, Custom",
    img: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    price: 1193,
    originalPrice: 1601,
    discount: "25% off",
    tag: "Biggest sale in 60+ days",
  },
  {
    title: "Birth Flower Necklace",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
    rating: 4.8,
    price: 4146,
    originalPrice: 5922,
    discount: "30% off",
    tag: "Biggest sale in 60+ days",
  },
  {
    title: "Custom Line Art",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwf_H8vusK7GwVbji1Sdkcm4elPzSuOPKaw&s",
    rating: 4.8,
    price: 716,
    originalPrice: 1504,
    discount: "55% off",
    tag: "Free delivery",
  },
];

// Component
function CategoryGrid() {
  return (
    <Section className="category-grid section2">
      {/* Categories Section */}
      <CategoriesTitle>More must-haves for Mum</CategoriesTitle>
      <CategoriesGrid>
        {categories.map((cat) => (
          <CategoryCard key={cat.title} href="#">
            <CategoryImage src={cat.img} alt={cat.title} />
            <CategoryTitle>{cat.title}</CategoryTitle>
          </CategoryCard>
        ))}
      </CategoriesGrid>

      {/* Deals Section */}
      <DealsHeader>
        <DealsTitle>Today&apos;s big deals</DealsTitle>
        <Timer>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          Fresh deals in 00:30:31
        </Timer>
      </DealsHeader>
      <DealsGrid>
        <ArrowButton>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </ArrowButton>
        {deals.map((deal) => (
          <DealCard key={deal.title} href="#">
            <DealImage src={deal.img} alt={deal.title} />
            <DealInfo>
              <DealTitle>{deal.title}</DealTitle>
              <DealRating>
                {deal.rating} ★
              </DealRating>
              <DealPrice>
                <CurrentPrice>₹{deal.price}</CurrentPrice>
                <OriginalPrice>₹{deal.originalPrice}</OriginalPrice>
                <Discount>{deal.discount}</Discount>
              </DealPrice>
              <DealTag>{deal.tag}</DealTag>
            </DealInfo>
          </DealCard>
        ))}
        <ArrowButton>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </ArrowButton>
      </DealsGrid>
    </Section>
  );
}

export default CategoryGrid;