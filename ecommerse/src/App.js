import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./Hero/Hero";
import Services from "./components/Services";
import Banner from "./components/Banner";
import OurProducts from "./components/OurProducts";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Mobiles from "./components/Mobiles";
import Laptops from "./components/Laptops";
import Watches from "./components/Watches";
import Headphones from "./components/Headphones";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext"; // ✅ Import context
import Image1 from "./assets/Hero/headphone.png";
import ServicesComponent from "./components/ServicesComponent";
import DealsComponent from "./components/DealsComponent";
import BestSellers from "./components/BestSellers";

const BannerData = {
  discount: "30% OFF of the sale",
  title: "Fine Smile",
  date: "28 Oct to 28 Nov",
  image: Image1,
  title2: "Air solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis.",
  bgColor: "#f42c37",
};

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Banner data={BannerData} />
                <OurProducts />
                <BestSellers/>
                <Footer />
              </>
            }
          />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<ServicesComponent />} />
          <Route path="/Deals" element={<DealsComponent />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
