import React from "react";
import { S_SaleGoodProduct } from "./CSS_body";
import { Breadcrumb, Menu, Col, Row, Grid } from "antd";
import { ListProduct } from "./ListProduct";
import ItemProduct from "./ItemProduct";
import btnLeft from "../../img/btnLeft.png";
import btnRight from "../../img/btnRight.png";
import sale from "../../img/sale.svg";
import bannerSale from "../../img/bannerSale.svg";
const SaleGoodProduct = () => {
  return (
    <S_SaleGoodProduct>
      <h1>Sản phẩm sale với mức giá hấp dẫn nhất </h1>
      <div className="wrapSaleGoodProduct">
        <Row style={{ marginBottom: `20px` }} gutter={[10, 30]}>
          {ListProduct.map(
            (product, index) =>
              product.typeElement == "SaleGood" && (
                <Col key={index} style={{ position: "relative" }} sm={6}>
                  `` <img className="btnSale" src={sale} alt="" />
                  <ItemProduct key={index} product={product} index={index} />
                </Col>
              )
          )}
        </Row>
      </div>
      <div className="btnNewProduct">
        <img src={btnLeft} alt="" />
        <img src={btnRight} alt="" />
      </div>
      <img
        style={{
          width: `100%`,
          marginTop: `68px`,
        }}
        src={bannerSale}
        alt=""
      />
    </S_SaleGoodProduct>
  );
};

export default SaleGoodProduct;
