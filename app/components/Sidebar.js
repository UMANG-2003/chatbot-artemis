import React, { forwardRef } from "react";
import Link from "next/link";

const Sidebar = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute h-[90vh] w-0 backdrop-blur-xl bg-white/5 transition-all duration-500 overflow-hidden z-50">
      <ul className="absolute left-0 top-0 p-5 text-white  w-full " id="sidebarContent">
        <Link href={"/"}>
        <li className="mb-4 cursor-pointer bg-gray-900 rounded-lg w-full p-3">Home</li>
        </Link>
        <Link href={"/Aboutme"}>
        <li className="mb-4 cursor-pointer bg-gray-900 rounded-lg w-full p-3">About me</li>
        </Link>
        <Link href={"/UserSection"}>
        <li className="mb-4 cursor-pointer bg-gray-900 rounded-lg w-full p-3">Chatbot</li>
        </Link>
      </ul>
    </div>
  );
});

export default Sidebar;
