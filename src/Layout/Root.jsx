import React from "react";
import Header from "../Shared/Header";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Root;
