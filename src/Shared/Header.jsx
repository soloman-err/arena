import React from "react";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 px-8 md:px-20 lg:px-40 py-2">
      {/* Title */}
      <div>
        <h2 className="text-[#93BFCF] text-2xl lg:text-3xl">
          <span className="font-bold">a</span>rena
          <span className="font-bold">.</span>
        </h2>
      </div>

      <Navigation></Navigation>
    </nav>
  );
};

export default Navbar;
