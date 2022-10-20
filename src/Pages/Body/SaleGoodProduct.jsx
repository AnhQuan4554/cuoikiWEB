import React from "react";
import { S_SaleGoodProduct } from "./CSS_body";
import { Breadcrumb, Menu, Col, Row, Grid } from "antd";
import { ListProduct } from "./ListProduct";
import ItemProduct from "./ItemProduct";
import btnSale from "../../img/btnSale.png";
const SaleGoodProduct = () => {
  return (
    <S_SaleGoodProduct>
      <h1>Sản phẩm sale với mức giá hấp dẫn nhất </h1>
      <div className="wrapSaleGoodProduct">
        <Row style={{ marginBottom: `20px` }} gutter={[10, 30]}>
          {ListProduct.map(
            (product, index) =>
              product.typeElement == "SaleGood" && (
                <Col style={{ position: "relative" }} sm={6}>
               ``   <img className="btnSale" src={btnSale} alt="" />
                  <ItemProduct key={index} product={product} index={index} />
                </Col>
              )
          )}
        </Row>
      </div>
    </S_SaleGoodProduct>
  );
};

export default SaleGoodProduct;
