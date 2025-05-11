import React from "react";
import TopNoticeBar from "./components/TopNoticeBar";
import Header from "./components/Header";
import PromoBanner from "./components/PromoBanner";
import HeroBanner from "./components/HeroBanner";
import CategoryGrid from "./components/CategoryGrid";
import FeaturedProducts from "./components/FeaturedProducts";
import ShopByCategory from "./components/ShopByCategory";
import DealsOrMembershipBanner from "./components/DealsOrMembershipBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-root">

      {/* <TopNoticeBar /> */}
      <Header />
      <HeroBanner />
      <PromoBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <ShopByCategory />
      <DealsOrMembershipBanner />
      <Footer />
    </div>
  );
}

export default App;
