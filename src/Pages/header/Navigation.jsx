import React from "react";
import { S_navigation } from "./CSS_Header";
import { Breadcrumb, Menu } from "antd";
import { Link } from "react-router-dom";
import Contact from "./Contact";
const Navigation = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.alipay.com/"
            >
              General
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.taobao.com/"
            >
              Layout
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.tmall.com/"
            >
              Navigation
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <S_navigation>
      <Breadcrumb separator="">
        <Breadcrumb.Item>
          {" "}
          <Link style={{ color: `#fff` }} to="/" className="nav-link">
            Trang chủ
          </Link>{" "}
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
        <Breadcrumb.Item overlay={menu}>Tin tức</Breadcrumb.Item>
        <Breadcrumb.Item>
          {" "}
          <Link style={{ color: `#fff` }} to="/Contact" className="nav-link">
            Liên hệ
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Về chúng tôi </Breadcrumb.Item>
        <Breadcrumb.Item>Khác</Breadcrumb.Item>
      </Breadcrumb>
    </S_navigation>
  );
};

export default Navigation;
