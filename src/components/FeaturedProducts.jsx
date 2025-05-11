import React from "react";
import styled from "styled-components";

// Styled Components for Editor's Picks Section
const Section = styled.section`
  padding: 40px 5%;
  background: #fff;
`;

const PicksHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const PicksTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SeeMoreButton = styled.a`
  background: #f5f5f5;
  color: #222;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

const PicksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const PickCard = styled.a`
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const PickImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 120px;
  }
`;

const PickPrice = styled.div`
  font-size: 0.9rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 500;
  margin-top: 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Styled Components for Discounted Items Section
const DiscountTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 600;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const DiscountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

const DiscountCard = styled.a`
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const DiscountImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const DiscountTitleText = styled.h3`
  font-size: 0.9rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 500;
  margin-top: 8px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const DiscountTag = styled.span`
  font-size: 0.8rem;
  color: #555;
  font-family: "Arial", sans-serif;
  margin-top: 4px;
  display: block;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

// Data
const picks = [
  {
    name: "Tassel Keychain",
    img: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?auto=format&fit=crop&w=300&q=80",
    price: "₹1,556",
    originalPrice: "₹2,046",
  },
  {
    name: "Personalized Tote Bag",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=300&q=80",
    price: "₹2,228",
    originalPrice: "₹3,475",
  },
  {
    name: "Gemstone Rings",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    price: "₹1,821",
    originalPrice: "₹3,642",
  },
  {
    name: "Stained Glass Flowers",
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=300&q=80",
    price: "₹4,181",
    originalPrice: "₹6,069",
  },
  {
    name: "Zodiac Cake Topper",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
    price: "₹1,627",
    originalPrice: "₹2,033",
  },
  {
    name: "Custom Stationery",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80",
    price: "₹1,105",
  },
];

const discountedItems = [
  {
    name: "Graduation Gifts",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80",
    tag: "up to 30% off",
  },
  {
    name: "Gifts for Her",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
    tag: "up to 30% off",
  },
  {
    name: "Outdoor & Gardening",
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=300&q=80",
    tag: "up to 20% off",
  },
  {
    name: "Kids Playroom",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
    tag: "up to 20% off",
  },
  {
    name: "Spring Style",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80",
    tag: "up to 20% off",
  },
];

// Component
function FeaturedProducts() {
  return (
    <Section className="featured-products">
      {/* Editor's Picks Section */}
      <PicksHeader>
        <PicksTitle>Editor&apos;s Picks: The Personalisation Shop</PicksTitle>
        <SeeMoreButton href="#">See more</SeeMoreButton>
      </PicksHeader>
      <PicksGrid>
        {picks.map((product) => (
          <PickCard key={product.name} href="#">
            <PickImage src={product.img} alt={product.name} />
            <PickPrice>
              {product.price}{" "}
              {product.originalPrice && (
                <span style={{ textDecoration: "line-through", color: "#777" }}>
                  {product.originalPrice}
                </span>
              )}
            </PickPrice>
          </PickCard>
        ))}
      </PicksGrid>

      {/* Discounted Items Section */}
      <DiscountTitle>Shop extraordinary items at special prices</DiscountTitle>
      <DiscountGrid>
        {discountedItems.map((item) => (
          <DiscountCard key={item.name} href="#">
            <DiscountImage src={item.img} alt={item.name} />
            <DiscountTitleText>{item.name}</DiscountTitleText>
            <DiscountTag>{item.tag}</DiscountTag>
          </DiscountCard>
        ))}
      </DiscountGrid>
    </Section>
  );
}

export default FeaturedProducts;