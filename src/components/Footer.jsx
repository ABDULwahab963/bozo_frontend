import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="p-[20px]">
      <div
        className={`${
          location.pathname === "/"
            ? "w-full bg-accent h-[300px] rounded-lg"
            : "hidden"
        }`}
      ></div>
    </footer>
  );
};

export default Footer;
