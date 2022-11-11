import React, { useState } from "react";
import { S_Detail } from "./CSS_body";
import Iphone1 from "../../img/products/Iphone1.png";
import Iphone2 from "../../img/products/Iphone2.png";
import Iphone3 from "../../img/products/Iphone3.png";
import choseColor from "../../img/products/choseColor.svg";
import star from "../../img/star.svg";
const Detail = () => {
  const [priceProduct, setpriceProduct] = useState("");
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
        <div className="btn">
          <button>Mua ngay</button>
          <button>Thêm vào giỏ</button>
        </div>
        <div className="inforDetail">
          <p>
            Công nghệ màn hình: IPS LCD Độ phân giải: 828 x 1792 Pixels Màn hình
            rộng: 6.1" Độ phân giải: 2 camera 12 MP, 12 MP Hệ điều hành: iOS 15
            Chip xử lý (CPU): Apple A13 Bionic 6 nhân Mạng di động: Hỗ trợ 4G Số
            khe sim: 1 Nano SIM & 1 eSIM Dung lượng pin: 3110 mAh
          </p>
        </div>
      </div>
    </S_Detail>
  );
};

export default Detail;
