import React from "react";
import { Carousel } from "antd";
import caro1 from "../../img/caro/caro1.png";
import banner1 from "../../img/banner/banner1.png";
import banner2 from "../../img/banner/banner2.png";
import banner3 from "../../img/banner/banner3.png";
import extra1 from "../../img/extra1.png";
import extra2 from "../../img/extra2.png";
import extra3 from "../../img/extra3.png";
import { S_inforExtra } from "./CSS_Header";
const CarouselSlide = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            src={banner1}
            style={{ width: "100%", height: "500px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src={banner2}
            style={{ width: "100%", height: "500px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src={banner3}
            style={{ width: "100%", height: "500px" }}
            alt=""
          />
        </div>
        <div>
          <img
            src={banner1}
            style={{ width: "100%", height: "500px" }}
            alt=""
          />
        </div>
      </Carousel>
      <S_inforExtra>
        <img src={extra1} alt="" />
        <img src={extra2} alt="" />
        <img src={extra3} alt="" />
      </S_inforExtra>
    </div>
  );
};

export default CarouselSlide;
