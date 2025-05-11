import React from "react";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
  padding: 40px 5%;
  background: #fff8e1;
`;

const BlogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled.a`
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const BlogInfo = styled.div`
  padding: 16px;
`;

const BlogCategory = styled.span`
  font-size: 0.8rem;
  color: #555;
  font-family: "Arial", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const BlogPostTitle = styled.h3`
  font-size: 1.1rem;
  color: #222;
  font-family: "Arial", sans-serif;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BlogDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Data
const blogPosts = [
  {
    category: "Shopping Guides",
    title: "9 Comfy Throws for Cosy Autumn Vibes",
    description: "Embrace the snuggling season with stylish throws that will warm your hearts.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  },
  {
    category: "Shopping Guides",
    title: "14 Beautiful Bags That Express Your Unique Style",
    description: "Amp up your fashion game with bags that perfectly match your aesthetic.",
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80",
  },
  {
    category: "Gift Ideas",
    title: "The Best Gift Ideas for Kids of All Ages",
    description: "Shop the sweetest surprises for all little ones in your family—these gifts for kids will definitely earn you some brownie points.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
];

// Component
function ShopByCategory() {
  return (
    <Section className="shop-by-category">
      {/* Blog Section */}
      <BlogHeader>
        <BlogTitle>Fresh from the blog</BlogTitle>
      </BlogHeader>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard key={post.title} href="#">
            <BlogImage src={post.img} alt={post.title} />
            <BlogInfo>
              <BlogCategory>{post.category}</BlogCategory>
              <BlogPostTitle>{post.title}</BlogPostTitle>
              <BlogDescription>{post.description}</BlogDescription>
            </BlogInfo>
          </BlogCard>
        ))}
      </BlogGrid>
    </Section>
  );
}

export default ShopByCategory;