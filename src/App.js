import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Changebg from "./Components/Changebg";
import Categories from "./Components/Categories";
import Tell from "./Components/Tell_us";
import Features from "./Components/Features";
import Discover from "./Components/Discover";
import Diverse from "./Components/Diverse";
function App() {
  return (
    <div>
      <Navbar />

      <Discover />
      <Features />
      <Diverse />

      <Changebg />
      <Categories />
      <About />
      <Tell />
      <Footer />
    </div>
  );
}

export default App;
