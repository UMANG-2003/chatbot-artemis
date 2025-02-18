import React, { forwardRef } from "react";
import Link from "next/link";

const Sidebar = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute h-[90vh] w-0 bg-gray-900 transition-all duration-500 overflow-hidden z-20">
      <ul className="absolute left-0 top-0 p-5 text-white  w-full " id="sidebarContent">
        <Link href={"/"}>
        <li className="mb-4 cursor-pointer bg-gray-600 w-full p-3 shadow-md shadow-gray-600">Home</li>
        </Link>
        <li className="mb-4 cursor-pointer bg-gray-600 w-full p-3 shadow-md shadow-gray-600">About</li>
        <li className="mb-4 cursor-pointer bg-gray-600 w-full p-3 shadow-md shadow-gray-600">Shop</li>
        <li className="mb-4 cursor-pointer bg-gray-600 w-full p-3 shadow-md shadow-gray-600">Content</li>
      </ul>
    </div>
  );
});

export default Sidebar;
