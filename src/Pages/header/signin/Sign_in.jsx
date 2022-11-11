import React, { useState, useEffect } from "react";
import { cssTransition } from "react-toastify";
import "./Sign_in.css";
import { Link, useNavigate } from "react-router-dom";
import Home from "../../../Home";

const Sign_in = () => {
  ////
  const defauUser = {
    name: "",
    password: "",
  };

  const [userInfor, setUserInfor] = useState(defauUser);
  ///dọc dữ liệu từ local
  const users = JSON.parse(localStorage.getItem("users"));
  let navigate = useNavigate();
  // khi SUB
  const handleSub = (e) => {
    e.preventDefault();
    const userCurrentlt = users.find(
      (u) => u.name === userInfor.name && u.password === userInfor.password
    );
    console.log(userCurrentlt);
    if (!userCurrentlt) {
      alert("Tài khoản mật khẩu không tồn tại !!!");
      return;
    }

    //nếu có biến uuser curentlty thì lưu vào local biến userSurent
    userCurrentlt &&
      localStorage.setItem("userCurrentlt", JSON.stringify(userCurrentlt)); //chỉ cần 1 biến vì chỉ có 1 tài khoản đăng nhập được
    userCurrentlt && navigate("../", { replace: true });
    setUserInfor(defauUser);
  };
  return (
    <div className="wrapSign_in">
      <form /* onSubmit={handleSub} */ className="Sign_in">
        <h2
          style={{
            color: "#0379ca",
            textAlign: " center",
            marginBottom: `16px`,
          }}
        >
          Sign In
        </h2>
        <div className="Sign_in_input">
          <label htmlFor="userInput">
            <p>Họ và tên</p>
          </label>
          <input
            onChange={(e) =>
              setUserInfor({ ...userInfor, name: e.target.value })
            }
            value={userInfor.name}
            type="text"
            name="userInput"
            id="userInput"
          />
        </div>
        <div className="Sign_in_input">
          <label htmlFor="password">
            <p>Mật khẩu</p>
          </label>
          <input
            onChange={(e) =>
              setUserInfor({ ...userInfor, password: e.target.value })
            }
            value={userInfor.password}
            type="text"
            name="password"
            id="password"
          />
        </div>
        <button
          type="submit"
          style={{
            background: `#0379ca`,
            padding: "8px 18px",
            color: `#fff`,
            border: "none",
            borderRadius: `6px`,
            cursor: `pointer`,
            marginLeft: `50%`,
            transform: "translateX(-50%)",
          }}
        >
          Đăng nhập
        </button>

        <Link to="/" className="nav-link home">
          Trang chủ
        </Link>
      </form>
    </div>
  );
};

export default Sign_in;
