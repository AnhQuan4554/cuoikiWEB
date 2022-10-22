import React from "react";
import { S_Review } from "./CSS_InforOther";
import review1 from "./img/review1.svg";
import user1 from "./img/user1.svg";
import stars from "./img/stars.svg";
import product1 from "./img/product1.svg";
const Review = () => {
  return (
    <S_Review>
      <h1>Đánh giá từ người mua hàng</h1>
      <img id="review1" src={review1} alt="" />
      <div className="listReview">
        <div className="itemReview">
          <div className="User">
            <img src={user1} alt="" className="imgUser" />
            <div className="inforUser">
              <h3>Nica Cielo Alia</h3>
              <span>Mua Iphone 11</span>
            </div>
          </div>
          <img src={stars} alt="" className="stars" />
          <span className="textReview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad
            autem eligendi temporibus aut eaque debitis? A eum sunt unde facilis
            eius recusandae animi deserunt atque cum veritatis. Deleniti,
            sapiente!
          </span>
          <div className="productBuy">
            <img src={product1} alt="" className="productBuy_item" />
          </div>
        </div>
        <div className="itemReview">
          <div className="User">
            <img src={user1} alt="" className="imgUser" />
            <div className="inforUser">
              <h3>Nica Cielo Alia</h3>
              <span>Mua Iphone 11</span>
            </div>
          </div>
          <img src={stars} alt="" className="stars" />
          <span className="textReview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad
            autem eligendi temporibus aut eaque debitis? A eum sunt unde facilis
            eius recusandae animi deserunt atque cum veritatis. Deleniti,
            sapiente!
          </span>
          <div className="productBuy">
            <img src={product1} alt="" className="productBuy_item" />
          </div>
        </div>
        <div className="itemReview">
          <div className="User">
            <img src={user1} alt="" className="imgUser" />
            <div className="inforUser">
              <h3>Nica Cielo Alia</h3>
              <span>Mua Iphone 11</span>
            </div>
          </div>
          <img src={stars} alt="" className="stars" />
          <span className="textReview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad
            autem eligendi temporibus aut eaque debitis? A eum sunt unde facilis
            eius recusandae animi deserunt atque cum veritatis. Deleniti,
            sapiente!
          </span>
          <div className="productBuy">
            <img src={product1} alt="" className="productBuy_item" />
          </div>
        </div>
      </div>
    </S_Review>
  );
};

export default Review;
