import logo from "./logo.svg";
import "./App.css";
import { TopHeader } from "./Pages/header/TopHeader";
import Navigation from "./Pages/header/Navigation";
import CarouselSlide from "./Pages/header/Carousel";
import NewProduct from "./Pages/Body/NewProduct";
import SaleGoodProduct from "./Pages/Body/SaleGoodProduct";
import NewInfor from "./Pages/inforOther/NewInfor";
import Review from "./Pages/inforOther/Review";
import FooterWeb from "./Pages/footer/FooterWeb";
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navigation />
      <CarouselSlide />
      <NewProduct />
      <SaleGoodProduct />
      <NewInfor />
      <Review />
      <FooterWeb />
    </div>
  );
}

export default App;
