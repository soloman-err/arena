import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 px-8 md:px-20 lg:px-40 py-2">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-zinc-800 shadow-lg mb-2">
        <div>
          <h2 className="text-[#93BFCF] text-2xl font-bold lg:text-3xl">
            <span className="font-bold">a</span>rena
            <span className="font-bold">.</span>
          </h2>
        </div>

        <div className="hidden md:static lg:hidden md:flex gap-2">
          <input
            type="search"
            placeholder="Search"
            className="px-2 rounded outline-none"
          />
          <select name="lang" id="lang" placeholder="lang">
            <option value="english">English(US)</option>
            <option value="spanish">Spanish</option>
            <option value="bengali">Bengali</option>
            <option value="russian">Russian</option>
          </select>
        </div>

        <div className="space-x-2">
          <Link to="login">
            <button
              type="submit"
              className="border text-xs md:text-sm
             font-bold px-2 rounded hover:bg-zinc-600"
            >
              login
            </button>
          </Link>
          <Link to="/register">
            <button
              type="submit"
              className="border text-xs md:text-sm font-bold px-2 rounded hover:bg-zinc-600"
            >
              Register
            </button>
          </Link>
        </div>
      </div>

      <Navigation></Navigation>
    </nav>
  );
};

export default Navbar;
