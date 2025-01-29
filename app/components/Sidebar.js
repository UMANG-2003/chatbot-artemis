"use client";
import React, { forwardRef } from "react";

const Sidebar = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute h-[90vh] w-0 bg-gray-900 transition-all duration-500 overflow-hidden">
      <ul className="absolute left-0 top-0 p-5 text-white hidden" id="sidebarContent">
        <li className="mb-4 cursor-pointer">Home</li>
        <li className="mb-4 cursor-pointer">About</li>
        <li className="mb-4 cursor-pointer">Shop</li>
        <li className="mb-4 cursor-pointer">Content</li>
      </ul>
    </div>
  );
});

export default Sidebar;
