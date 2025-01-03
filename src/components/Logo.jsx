import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Linear } from "gsap";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../utils/assets";

const Logo = () => {
  useGSAP(() => {
    gsap.to(".icon", {
      rotate: 360,
      repeat: -1,
      duration: 3,
      ease: Linear.easeIn,
    });
  }, []);
  return (
    <Link to={"/"} className="logo flex items-center gap-[8px]">
      <img className="icon" src={assets.logo} alt="" />
      <p className="text-xl font-medium">Bozos Wheels</p>
    </Link>
  );
};

export default Logo;
