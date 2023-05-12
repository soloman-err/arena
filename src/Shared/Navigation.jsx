import React from "react";

const Navigation = () => {
  return (
    <nav className="hidden lg:static lg:flex justify-between w-[60%] mx-auto">
      <ul
        className="flex space-x-2
       lg:space-x-5 font-bold"
      >
        <li className="border-b px-2 border-zinc-800 hover:bg-zinc-700 shadow-lg">
          Home
        </li>
        <li className="border-b px-2 border-zinc-800 hover:bg-zinc-700 shadow-lg">
          Community
        </li>
        <li className="border-b px-2 border-zinc-800 hover:bg-zinc-700 shadow-lg">
          Download
        </li>
        <li className="border-b px-2 border-zinc-800 hover:bg-zinc-700 shadow-lg">
          Customize
        </li>
        <li className="border-b px-2 border-zinc-800 hover:bg-zinc-700 shadow-lg">
          About
        </li>
        <li className="border-b px-2 border-zinc-800 hover:bg-zinc-700 shadow-lg">
          Support
        </li>
      </ul>
      <div className="flex gap-2">
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
    </nav>
  );
};

export default Navigation;
