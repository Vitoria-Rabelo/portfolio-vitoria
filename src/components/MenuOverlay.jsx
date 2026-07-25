import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="fixed inset-0 z-20 bg-[#121212] bg-opacity-95 backdrop-blur-sm">
      <ul className="flex flex-col py-24 items-center">
        {links.map((link, index) => (
          <li key={index} className="w-full text-center">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
