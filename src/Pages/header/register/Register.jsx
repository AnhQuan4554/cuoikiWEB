import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import imgRegister from "./imgRegister.png";
import { Link, Outlet } from "react-router-dom";
const Register = () => {
  const defauUser = {
    name: "",
    email: "",
    password: "",
    password_Cnf: "",
  };
  const [userInfor, setUserInfor] = useState(defauUser);

  ///// khi SUBMIT
  const handleSub = (e) => {
    e.preventDefault();
    if (
      !userInfor.name ||
      !userInfor.email ||
      !userInfor.password ||
      !userInfor.password_Cnf
    ) {
      toast.error("Mời nhập đầy đủ ");
      return;
    }
    if (!cnfPas()) {
      toast.error("Xác nhận mật khẩu chưa đúng");
      return;
    }
    if (!handleEmail(userInfor.email)) return;
    toast.success("Đăng kí thành công ");

    ///////////////Nếu tất cả thỏa mãn thì thêm phần tử vào local
    //đọc từ local cũ
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    /// thêm phần tử mới vào sau khi đọc la toàn bộ các phần tử cũ
    localStorage.setItem("users", JSON.stringify([...users, userInfor]));
    setUserInfor(defauUser);
  };

  //hàm kiểm tra độ dài kí tự mật khẩu
  const handleBlur = (lenght) => {
    lenght < 6 && console.log("độ dài quá ngắn ");
  };
  //xác nhận mật khẩu
  const cnfPas = () =>
    userInfor.password !== userInfor.password_Cnf ? false : true;
  //kiểm tra xem có đúng là email ko
  const handleEmail = (emailValue) => {
    let re = /\S+@\S+\.\S+/;
    if (!re.test(emailValue)) {
      toast.error("Đây không phải email");
      return;
    } else {
      return true;
    }
  };
  return (
    <div className="wrapRegister">
      <img className="imgRegis" src={imgRegister} alt="" />
      <form className="Register" onSubmit={(e) => handleSub(e)}>
        <h2 style={{ color: "#0379CA", textAlign: " center" }}>Đăng kí</h2>
        <div className="Register_input">
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
        <div className="Register_input">
          <label htmlFor="emailInput">
            <p>Email/Số điện thoại</p>
          </label>
          <input
            onChange={(e) =>
              setUserInfor({ ...userInfor, email: e.target.value })
            }
            onBlur={(e) => handleEmail(e.target.value)}
            value={userInfor.email}
            type="email"
            name="emailInput"
            id="emailInput"
          />
        </div>
        <div className="Register_input">
          <label htmlFor="passwordInput">
            <p>Mật khẩu</p>
          </label>
          <input
            onChange={(e) =>
              setUserInfor({ ...userInfor, password: e.target.value })
            }
            value={userInfor.password}
            onBlur={(e) => handleBlur(e.target.value.length)}
            type="text"
            name="passwordInput"
            id="passwordInput"
          />
        </div>
        <div className="Register_input">
          <label htmlFor="password_Cnf">
            <p>Xác nhận mật khẩu</p>
          </label>
          <input
            onChange={(e) =>
              setUserInfor({ ...userInfor, password_Cnf: e.target.value })
            }
            value={userInfor.password_Cnf}
            type="text"
            name=" password_Cnf"
            id="password_Cnf"
          />
        </div>
        <div className="button_Register">
          <button type="submit">Register</button>
        </div>
        <div className="button_Register">
          <button type="submit">
            {" "}
            <Link
              style={{
                textDecoration: `none`,
                color: "#fff",
                display: "block",
              }}
              to="/Sign_in"
            >
              Signin
            </Link>
          </button>
        </div>

        <Link className="home" to="/">
          Trang chủ
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Register;
