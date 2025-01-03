import React from "react";
import { brands } from "../utils/assets";
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";

const Slider = () => {
  useGSAP(() => {
    gsap.to(".slider-container", {
      xPercent: -100,
      duration: 10,
      repeat: -1,
      ease: Linear.easeIn
    });
  }, []);
  return (
    <section className="overflow-x-hidden">
      <h2>
        <span>Brands</span> <br />
        We Deal In
      </h2>

      <div className="slider-container flex">
        {brands.map((b) => (
          <img className="w-[156px] mr-[16px]" src={b}></img>
        ))}
      </div>
    </section>
  );
};

export default Slider;
