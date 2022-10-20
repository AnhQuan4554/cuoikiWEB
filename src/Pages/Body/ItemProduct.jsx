import { Grid } from "antd";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { S_ItemProduct } from "./CSS_body";
import cart from "../../img/cart.png";
import addProduct from "../../img/addProduct.png";

//
const ItemProduct = ({ product, index }) => {
  console.log(product.image);
  return (
    <S_ItemProduct>
      <img className="imgCart" src={cart} alt="" />
      <img className="imgProduct" src={product.image} alt="" />
      <div className="inforProduct">
        <span className="inforName">{product.name}</span>
        <span className="inforPrice">{product.price}</span>
      </div>
      <img className="addProduct" src={addProduct} alt="" />
    </S_ItemProduct>
  );
};

export default ItemProduct;
