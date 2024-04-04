import { useState } from "react";
import { Button } from "./components/ui/button";
import { CarouselDemo } from "./components/demo/Carousel/CarouselDemo";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
