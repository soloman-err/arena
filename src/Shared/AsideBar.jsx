import React from "react";

const AsideBar = () => {
  return (
    <div className="bg-zinc-800 w-1/3 lg:w-[20%] min-h-screen flex flex-col px-2">
      <h2 className="font-bold border-b-4 text-lg">Topics</h2>
      <ul className="space-y-2 divide-y-2 my-2">
        <li>Science</li>
        <li>Technology</li>
        <li>Currency</li>
        <li>Economy</li>
        <li>Business</li>
      </ul>
    </div>
  );
};

export default AsideBar;
