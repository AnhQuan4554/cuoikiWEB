import logo from "./logo.svg";
import "./App.css";
import { TopHeader } from "./Pages/header/TopHeader";
import Navigation from "./Pages/header/Navigation";
import CarouselSlide from "./Pages/header/Carousel";
import NewProduct from "./Pages/Body/NewProduct";
import SaleGoodProduct from "./Pages/Body/SaleGoodProduct";
import NewInfor from "./Pages/inforOther/NewInfor";
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navigation />
      <CarouselSlide />
      <NewProduct />
      <SaleGoodProduct />
      <NewInfor />
    </div>
  );
}

export default App;
