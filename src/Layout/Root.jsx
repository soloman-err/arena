import React from "react";
import Navbar from "../Shared/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Root;
