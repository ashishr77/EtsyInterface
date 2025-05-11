import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Logo = styled.a`
  font-size: 28px;
  font-weight: bold;
  color: #f1641e;
  font-family: "Georgia", serif;
  text-decoration: none;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 24px; /* Smaller logo on mobile */
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 700px;
  margin: 0 16px;
  position: relative;
  display: none; /* Hidden by default */

  @media (min-width: 768px) {
    display: block; /* Visible on desktop */
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 40px 8px 16px;
  border: 1px solid #d1d3d4;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  font-family: "Arial", sans-serif;
  color: #222;
  background-color: #fafafa;

  &:focus {
    border-color: #f1641e;
    box-shadow: 0 0 0 2px rgba(241, 100, 30, 0.2);
  }

  &::placeholder {
    color: #666;
  }

  @media (max-width: 768px) {
    padding: 6px 36px 6px 12px; /* Adjusted padding for mobile */
    font-size: 12px; /* Smaller font on mobile */
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: #f1641e;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 24px; /* Smaller button on mobile */
    height: 24px;
    right: 6px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 8px; /* Reduced gap on mobile */
  }
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #222;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  font-family: "Arial", sans-serif;

  &:hover {
    color: #f1641e;
  }

  @media (max-width: 1023px) {
    span {
      display: none; /* Hide text labels on smaller screens */
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 18px; /* Smaller icons on mobile */
      height: 18px;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: #222;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none; /* Hidden on desktop */
  }
`;

const MobileSearch = styled.div`
  margin-top: 12px;
  position: relative;
  display: block;

  @media (min-width: 768px) {
    display: none; /* Hidden on desktop */
  }
`;

const NavContainer = styled.nav`
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 8px 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex; /* Visible on desktop */
  }
`;

const NavLink = styled.a`
  white-space: nowrap;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  text-decoration: none;
  font-family: "Arial", sans-serif;
  transition: color 0.2s;

  &:hover {
    color: #f1641e;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font on mobile */
    padding: 4px 8px;
  }
`;

const MobileMenu = styled.div`
  background-color: white;
  border-top: 1px solid #eee;
  margin-top: 12px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none; /* Hidden on desktop */
  }
`;

const MobileNavLink = styled.a`
  padding: 8px 16px;
  color: #222;
  text-decoration: none;
  font-family: "Arial", sans-serif;
  font-size: 14px;

  &:hover {
    background-color: #f8f8f8;
  }

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font on mobile */
    padding: 6px 12px;
  }

  .hidden {
  display: none; 
}
  @media (max-width: 768px) {
  .block {
    display: block; /* Makes the element visible on medium screens and above */
  }
}
`;

const SignInLink = styled(MobileNavLink)`
  font-weight: 500;
`;

// Component
const navLinks = [
  "Gifts",
  "Mother's Day Gifts",
  "Home Favourites",
  "Fashion Finds",
  "Registry",
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <HeaderWrapper>
      <Container>
        {/* Top Row (Logo, Search, Icons) */}
        <TopRow>
          {/* Logo */}
          <Logo href="/">Etsy</Logo>
          {/* <img 
          className="hidden block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZmgn7KZfbDj1g4BFUtYI4a015CYrIu-HRA&s" alt="catogoty" height={"50px"}  /> */}
           {/* <p style={{color: "#000", fontSize: "16px", fontWeight: "bold"}}>Category</p> */}
          {/* Search Bar - Hidden on mobile */}
          <SearchContainer>
            <SearchInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything"
            />
            <SearchButton type="submit">
              <svg
                width="30"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </SearchButton>
          </SearchContainer>

          {/* Icons */}
          <IconsContainer>
            <IconLink href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Sign in</span>
            </IconLink>
            <IconLink href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </IconLink>
            <IconLink href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </IconLink>
            <IconLink href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </IconLink>
            <IconLink href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </IconLink>
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </MobileMenuButton>
          </IconsContainer>
        </TopRow>

        {/* Mobile Search */}
        {/* <MobileSearch> */}
          {/* <SearchInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anything"
          />
          <SearchButton type="submit">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </SearchButton> */}
        {/* </MobileSearch> */}

        {/* Navigation - Desktop */}
        <NavContainer>
          {navLinks.map((link) => (
            <NavLink key={link} href="#">
              {link}
            </NavLink>
          ))}
        </NavContainer>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MobileMenu>
            <SignInLink href="#">Sign in</SignInLink>
            {navLinks.map((link) => (
              <MobileNavLink key={link} href="#">
                {link}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </Container>
    </HeaderWrapper>
  );
}

export default Header;