import React from "react";
import { S_topHeader } from "./CSS_Header";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbUserCircle } from "react-icons/tb";
import logo from "../../img/logo.png";
export const TopHeader = () => {
  return (
    <S_topHeader>
      <div className="topHeader_logo">
        <img
          /* style={{ width: `100px`, height: `100px` }} */ src={logo}
          alt=""
        />
      </div>
      <div className="topHeader_search">
        <span style={{ color: " #DBB9FF" }}>
          Tìm kiếm sản phẩm bạn muốn mua
        </span>
        <BiSearch style={{ color: " #DBB9FF", fontSize: `40px` }} />
      </div>
      <div className="topHeader_cart">
        <AiOutlineShoppingCart
          style={{ color: " #DBB9FF", fontSize: `35px` }}
        />
      </div>
      <div className="topHeader_user">
        <TbUserCircle style={{ color: " #DBB9FF", fontSize: `35px` }} />
      </div>
    </S_topHeader>
  );
};
