import { Grid } from "antd";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { S_ItemProduct } from "./CSS_body";
import cart from "../../img/cart.png";
import addProduct from "../../img/addProduct.png";
import { useNavigate } from "react-router-dom";
import Detail from "./Detail";
// import Sign_in from "../header/signin/Sign_in";
const ItemProduct = ({ product, index }) => {
  let navigate = useNavigate();
  const showProduct = () => {
    navigate("./Detail", { replace: true });
  };
  return (
    <S_ItemProduct>
      <img className="imgCart" src={cart} alt="" />
      <img
        onClick={showProduct}
        className="imgProduct"
        src={product.image}
        alt=""
      />
      <div className="inforProduct">
        <span className="inforName">{product.name}</span>
        <span className="inforPrice"> {product.price}</span>
        <span className="inforDescribe"> {product.describe}</span>
      </div>
      <img className="addProduct" src={addProduct} alt="" />
    </S_ItemProduct>
  );
};

export default ItemProduct;
