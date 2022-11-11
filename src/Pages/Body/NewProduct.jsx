import React, { useState } from "react";
import { S_NewProduct, S_storeProduct } from "./CSS_body";
import { Breadcrumb, Menu, Col, Row, Grid } from "antd";
import { ListProduct } from "./ListProduct";
////////// import Link Product //////////////////////
import btnLeft from "../../img/btnLeft.png";
import btnRight from "../../img/btnRight.png";
import ItemProduct from "./ItemProduct";
////////////////////////////////////////////////
const NewProduct = () => {
  const [typeProduct, setTypeProduct] = useState("Phone");
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <span>Dưới 3 triệu</span>,
        },
        {
          key: "2",
          label: <span>Dưới 10 triệu</span>,
        },
        {
          key: "3",
          label: <span>Trên 10 triệu</span>,
        },
      ]}
    />
  );
  const typeCategory = (
    <Menu
      items={[
        {
          key: "1",
          label: <span>Apple</span>,
        },
        {
          key: "2",
          label: <span>Sam Sung</span>,
        },
      ]}
    />
  );

  return (
    <S_NewProduct>
      <h1 className="tittle">Các dòng sản phẩm mới nhất</h1>
      <div className="NewProduct_sort">
        <Breadcrumb separator="">
          <Breadcrumb.Item onClick={() => setTypeProduct("Phone")}>
            <a className="btnSort">Điện thoại</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => setTypeProduct("Laptop")}>
            <a className="btnSort">Máy tính</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>
            <a className="btnSort">Giá</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item overlay={typeCategory}>
            <a className="btnSort">Hãng</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <S_storeProduct className="storeProduct">
        <Row style={{ marginBottom: `20px` }} gutter={[10, 30]}>
          {ListProduct.map(
            (product, index) =>
              // product.typeElement == "NewProduct" &&
              product.typeProduct == `${typeProduct}` && (
                <Col key={index} xs={8} lg={6}>
                  <ItemProduct key={index} product={product} index={index} />
                </Col>
              )
          )}
        </Row>
        <div className="btnNewProduct">
          <img src={btnLeft} alt="" />
          <img src={btnRight} alt="" />
        </div>
      </S_storeProduct>
    </S_NewProduct>
  );
};

export default NewProduct;
