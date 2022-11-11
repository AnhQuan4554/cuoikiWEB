import logo from "./logo.svg";
import "./App.css";
import { TopHeader } from "./Pages/header/TopHeader";
import Navigation from "./Pages/header/Navigation";
import CarouselSlide from "./Pages/header/Carousel";
import Sign_in from "./Pages/header/signin/Sign_in";
import NewProduct from "./Pages/Body/NewProduct";
import SaleGoodProduct from "./Pages/Body/SaleGoodProduct";
import NewInfor from "./Pages/inforOther/NewInfor";
import Review from "./Pages/inforOther/Review";
import FooterWeb from "./Pages/footer/FooterWeb";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Pages/header/register/Register";
import Contact from "./Pages/header/Contact";
import Detail from "./Pages/Body/Detail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/Sign_in" element={<Sign_in />}>
          {" "}
        </Route>
        <Route path="/Register" element={<Register />}>
          {" "}
        </Route>
        <Route path="/Contact" element={<Contact />}>
          {" "}
        </Route>
        <Route path="/Detail" element={<Detail />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
