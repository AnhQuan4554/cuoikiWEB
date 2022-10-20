import logo from "./logo.svg";
import "./App.css";
import { TopHeader } from "./Pages/header/TopHeader";
import Navigation from "./Pages/header/Navigation";
import CarouselSlide from "./Pages/header/Carousel";
import NewProduct from "./Pages/Body/NewProduct";
import SaleGoodProduct from "./Pages/Body/SaleGoodProduct";
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navigation />
      <CarouselSlide />
      <NewProduct />
      <SaleGoodProduct />
    </div>
  );
}

export default App;
