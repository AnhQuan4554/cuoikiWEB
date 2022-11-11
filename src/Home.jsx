import React from "react";
import NewProduct from "./Pages/Body/NewProduct";
import SaleGoodProduct from "./Pages/Body/SaleGoodProduct";
import FooterWeb from "./Pages/footer/FooterWeb";
import CarouselSlide from "./Pages/header/Carousel";
import Navigation from "./Pages/header/Navigation";
import { TopHeader } from "./Pages/header/TopHeader";
import NewInfor from "./Pages/inforOther/NewInfor";
import Review from "./Pages/inforOther/Review";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <Navigation />
      <CarouselSlide />
      <NewProduct />
      <SaleGoodProduct />
      <NewInfor />
      <Review />
      <FooterWeb />
    </div>
  );
};

export default Home;
