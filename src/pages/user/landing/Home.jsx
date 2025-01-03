import React from "react";
import { assets } from "../../../utils/assets";
import Slider from "../../../components/Slider";
import FeaturedCars from "../../../components/FeaturedCars";

const Home = () => {
  return (
    <>
      <section className="h-screen">
        <div className="w-full h-full">
          <video
            className="w-full h-full rounded-xl object-cover"
            src={assets.bg_video}
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
        </div>
      </section>
      <Slider />
      <FeaturedCars />
    </>
  );
};

export default Home;
