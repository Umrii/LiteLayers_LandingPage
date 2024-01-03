import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Changebg from "./Components/Changebg";
import Categories from "./Components/Categories";
import Tell from "./Components/Tell_us";
function App() {
  return (
    <div>
      <Navbar />
      <Changebg />
      <Categories />
      {/* <Tell /> */}
      {/* <About /> */}

      <Footer />
    </div>
  );
}

export default App;
