import React from "react";
import { S_NewInfor } from "./CSS_InforOther";
import item1 from "./img/item1.svg";
import item2 from "./img/item2.svg";
import item3 from "./img/item3.svg";
const NewInfor = () => {
  return (
    <S_NewInfor>
      <h1>Những tin tức mới nhất về công nghệ</h1>
      <div className="arrangerInfor">
        <div className="arrangerInfor_item">
          <div className="wrapItem">
            <img src={item1}></img>
            <p>Chuyển đổi số: Blockchain nên là một lựa chọn phù hợp</p>
          </div>
        </div>
        <div className="arrangerInfor_item">
          <div className="wrapItem">
            <img src={item2}></img>
            <p>Chuyển đổi số: Blockchain nên là một lựa chọn phù hợp</p>
          </div>
        </div>
        <div className="arrangerInfor_item">
          <div className="wrapItem">
            <img src={item3}></img>
            <p>Chuyển đổi số: Blockchain nên là một lựa chọn ph</p>
          </div>
        </div>
      </div>
    </S_NewInfor>
  );
};

export default NewInfor;
