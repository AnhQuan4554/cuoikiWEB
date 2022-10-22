import React from "react";
import { S_FooterWeb } from "./CSS_footer";
const FooterWeb = () => {
  return (
    <S_FooterWeb>
      <div className="footItem">
        <div className="aboutMe">
          <h1>Về chúng tôi </h1>
          <span>Thông tin chung</span>
          <span>Blog của chúng tôi</span>
          <span>Thông tin liên hệ</span>
          <span>Điều khoản & chính sách</span>
          <span>Các câu hỏi thường gặp</span>
        </div>
      </div>
      <div className="footItem">
        <div className="partner">
          <h1>Đối tác </h1>
          <span>Đối tác liên kết</span>
          <span>Chương trình đại lý</span>
          <span>Đăng ký liên kết đại lý của ban</span>
        </div>
      </div>
      <div className="footItem">
        <div className="Product">
          <h1>Sản phẩm</h1>
          <span>Điện thoại</span>
          <span>Laptop</span>
          <span>Máy tính bảng</span>
          <span>Smart watch</span>
          <span>Khác</span>
        </div>
      </div>
      <div className="wrapEmail">
        <div className="Email">
          <h1>
            Lưu Email của bạn để nhận những thông báo mới nhất từ Infinitec nhé
          </h1>
          <input
            type="email"
            placeholder="Nhập Email của bạn để nhận thông báo mới"
          />
        </div>
      </div>
    </S_FooterWeb>
  );
};

export default FooterWeb;
