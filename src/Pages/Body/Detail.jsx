import React, { useState } from "react";
import { S_bottom, S_Detail, S_HoangDuong } from "./CSS_body";
import Iphone1 from "../../img/products/Iphone1.png";
import Iphone2 from "../../img/products/Iphone2.png";
import Iphone3 from "../../img/products/Iphone3.png";
import choseColor from "../../img/products/choseColor.svg";
import Frame from "../../img/products/Frame.png";
import Duong1 from "../../img/products/Duong1.png";
import Duong2 from "../../img/products/Duong2.png";
import Duong3 from "../../img/products/Duong3.png";
import Duong4 from "../../img/products/Duong4.png";
import Duong5 from "../../img/products/Duong5.svg";
import star from "../../img/star.svg";
import Navigation from "../header/Navigation";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
const Detail = () => {
  const [priceProduct, setpriceProduct] = useState("19.000.000 đ");
  const handleChoseRam = (e) => {
    const act = document.querySelector(".ramItem.active");
    act && act.classList.remove("active");
    e.currentTarget.classList.toggle("active");
  };
  const handleChose = (e) => {
    // change color
    const act = document.querySelector(".colorItem.active");
    act && act.classList.remove("active");
    e.currentTarget.classList.toggle("active");
    //
    const colorItems = document.querySelectorAll(".colorItem");
    if (colorItems[0].classList.contains("active")) {
      document.querySelector(".imgShowing img").src = `${Iphone1}`;
    }
    if (colorItems[1].classList.contains("active")) {
      document.querySelector(".imgShowing img").src = `${Iphone2}`;
    }
    if (colorItems[2].classList.contains("active")) {
      document.querySelector(".imgShowing img").src = `${Iphone3}`;
    }
  };
  const handlePrice = (e) => {
    setpriceProduct(e.currentTarget.textContent);
  };
  return (
    <>
      <Navigation />
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
          <p>Lựa chọn bộ nhớ</p>
          <div className="ram">
            <div onClick={(e) => handleChoseRam(e)} className="ramItem active">
              <span>256GB</span>
              <span onClick={(e) => handlePrice(e)}>19.000.000 đ</span>
              <img src={choseColor} alt="" />
            </div>
            <div onClick={(e) => handleChoseRam(e)} className="ramItem ">
              <span>256GB</span>
              <span onClick={(e) => handlePrice(e)}>20.000.000 đ</span>
              <img src={choseColor} alt="" />
            </div>
            <div onClick={(e) => handleChoseRam(e)} className="ramItem ">
              <span>256GB</span>
              <span onClick={(e) => handlePrice(e)}>29.000.000 đ</span>
              <img src={choseColor} alt="" />
            </div>
          </div>
          <p>Lựa chọn màu sắc</p>
          <div className="color ">
            <div onClick={(e) => handleChose(e)} className="colorItem active">
              <span style={{ background: `green` }}></span>
              <span>Xanh</span>
              <img src={choseColor} alt="" />
            </div>
            <div onClick={(e) => handleChose(e)} className="colorItem">
              <span style={{ background: `purple` }}></span>
              <span>Tím</span>
              <img src={choseColor} alt="" />
            </div>
            <div onClick={(e) => handleChose(e)} className="colorItem">
              <span></span>
              <span>Đỏ</span>
              <img src={choseColor} alt="" />
            </div>
          </div>
          <div className="priceText">
            <span>{priceProduct}</span>
          </div>
          {/* <div className="btn">
            <button>Mua ngay</button>
            <button>Thêm vào giỏ</button>
          </div> */}
          {/* <div className="inforDetail">
            <p>
              Công nghệ màn hình: IPS LCD Độ phân giải: 828 x 1792 Pixels Màn
              hình rộng: 6.1" Độ phân giải: 2 camera 12 MP, 12 MP Hệ điều hành:
              iOS 15 Chip xử lý (CPU): Apple A13 Bionic 6 nhân Mạng di động: Hỗ
              trợ 4G Số khe sim: 1 Nano SIM & 1 eSIM Dung lượng pin: 3110 mAh
            </p>
          </div> */}
          {/* Hoang Duong */}
          <S_HoangDuong>
            <h2 class="title3">Lựa chọn số lượng</h2>
            <div class="rightProduct_info-amount">
              <div class="rightProduct_info-choose">
                <AiOutlinePlus class="addButton" />
                <p class="amountNumber">1</p>
                <AiOutlineMinus class="addButton" />
              </div>
              <div class="rightProduct_info-tax">
                <p class="variablePrice">Giá: 13.690.000đ</p>
                <p class="variableTax">Thuế gia tăng: 10%</p>
              </div>
            </div>
            <div class="resumeLine"></div>
            <div class="resumePrice">
              <span class="resumePrice-title">Giá tổng cộng</span>
              <h1 class="resumePrice-price">15.059.000₫</h1>
            </div>
            <div class="purchaseButton">
              <button class="purchaseButton-buy">Mua ngay</button>
              <button class="purchaseButton-addToCast">
                <p class="name">Thêm vào giỏ hàng</p>
                <AiOutlineShoppingCart class="cast" />
              </button>
              <img class="banner" src={Frame} alt="" />
            </div>
            <div class="itemInfomation">
              <h2>Mô tả sản phẩm</h2>
              <ul style={{ color: " #9899a1" }}>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Công nghệ màn hình:{" "}
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      IPS LCD
                    </span>
                  </p>
                </li>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Độ phân giải:
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      828 x 1792 Pixels{" "}
                    </span>
                  </p>
                </li>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Màn hình rộng:{" "}
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      6.1"{" "}
                    </span>
                  </p>
                </li>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Độ phân giải:
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      2 camera 12 MP, 12 MP
                    </span>
                  </p>
                </li>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Hệ điều hành:{" "}
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      iOS 15{" "}
                    </span>
                  </p>
                </li>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Chip xử lý (CPU):
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      Apple A13 Bionic 6 nhân
                    </span>
                  </p>
                </li>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Mạng di động:
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      Hỗ trợ 4G
                    </span>
                  </p>
                </li>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Số khe sim:
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      1 Nano SIM & 1 eSIM{" "}
                    </span>
                  </p>
                </li>
                <li>
                  <p style={{ color: " #9899a1" }}>
                    Dung lượng pin:
                    <span style={{ color: "black", marginLeft: "10px" }}>
                      3110 mAh
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            {/* Bottom, */}
          </S_HoangDuong>

          {/* end Hoang Duong */}
        </div>
      </S_Detail>
      <S_bottom>
        <div class="bottomFeedback">
          <div class="bottomFeedback-review">
            <h2>Phản hồi và đánh giá</h2>
            <div class="circularProgress">
              <span class="circularProgress-value">4.8</span>
            </div>
            <div class="bottomFeedback-vote">
              <img src="./Images/star.png" alt="" />
              <span>4.8/5</span>
            </div>
            <div class="bar">
              <div class="bottomFeedback-votebar">
                <span class="voteLevel"> Tuyệt vời </span>
                <div class="voteBar"></div>
                <span class="votePeople"> 50 đánh giá </span>
              </div>
              <div class="bottomFeedback-votebar">
                <span class="voteLevel"> Rất Tốt </span>
                <div class="voteBar"></div>
                <span class="votePeople"> 50 đánh giá </span>
              </div>
              <div class="bottomFeedback-votebar">
                <span class="voteLevel"> Hài lòng</span>
                <div class="voteBar"></div>
                <span class="votePeople"> 50 đánh giá </span>
              </div>
              <div class="bottomFeedback-votebar">
                <span class="voteLevel"> Trung bình </span>
                <div class="voteBar"></div>
                <span class="votePeople"> 50 đánh giá </span>
              </div>
              <div class="bottomFeedback-votebar">
                <span class="voteLevel"> Rất kém </span>
                <div class="voteBar"></div>
                <span class="votePeople"> 50 đánh giá </span>
              </div>
            </div>
          </div>
          <div class="bottomFeedback-image">
            <h2>Ảnh và video từ người mua hàng</h2>
            <div class="listImage">
              <img src={Duong1} alt="" class="imageItem" />
              <img src={Duong2} alt="" class="imageItem" />
              <img src={Duong3} alt="" class="imageItem" />
            </div>
            <div class="listImage">
              <img src={Duong4} alt="" class="imageItem" />
              <img src={Duong5} alt="" class="imageItem" />
              <img src="./Images/Group 34261.png" alt="" class="imageItem" />
            </div>
          </div>
        </div>
      </S_bottom>
    </>
  );
};

export default Detail;
