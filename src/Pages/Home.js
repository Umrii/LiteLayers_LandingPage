import React from "react";
import Navbar from "../Components/Navbar";
import Discover from "../Components/Discover";
import Features from "../Components/Features";
import Diverse from "../Components/Diverse";
import Changebg from "../Components/Changebg";
import Categories from "../Components/Categories";
import About from "../Components/About";
import Tell from "../Components/Tell_us";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Discover />
      <Features />

      <Diverse />

      <Changebg />

      <Categories />

      <About />
      <Tell />

      <Footer />
    </>
  );
}

export default Home;
