import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Privacy from "./Pages/Privacy";
// import New from "./Components/New";
// import Newslider from "./Components/NewSlider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
