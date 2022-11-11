import React from "react";
import { S_Detail } from "./CSS_body";
import Iphone1 from "../../img/products/Iphone1.png";
import Iphone2 from "../../img/products/Iphone2.png";
import Iphone3 from "../../img/products/Iphone3.png";
import star from "../../img/star.svg";
const Detail = () => {
  return (
    <S_Detail>
      <div className="productDetail">
        <div className="imgShowing">
          <img src={Iphone1} alt="" />
        </div>
        <div className="choseProduct">
          <img src={Iphone1} alt="" />
          <img src={Iphone2} alt="" />
          <img src={Iphone3} alt="" />
        </div>
      </div>
      <div className="inforProductDetail">
        <h2>IPhone 11 I Chính hãng VN/A</h2>
        <img className="star" src={star} alt="" />
        <div className="ram">
          <p>Lựa chọn bộ nhớ</p>
          <div className="ramItem">
            <span>256GB</span>
            <span>256GB</span>
          </div>
        </div>
      </div>
    </S_Detail>
  );
};

export default Detail;
