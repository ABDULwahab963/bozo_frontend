import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
const Car = ({ id, title, image, description }) => {
  return (
    <div className="w-full h-[300px] bg-light_bg rounded-lg overflow-hidden relative group">
      <Link to={`/shop/${id}`}>
        <img
          className="w-full h-full object-cover object-center hover:scale-125 duration-300 ease-linear"
          src={image}
          alt=""
        />
      </Link>

      <div className="absolute bottom-[16px] right-[16px]">
        <Link
          to={`/shop/${id}`}
          className="w-[56px] h-[56px] bg-white rounded flex items-center justify-center group-hover:bg-accent duration-200 ease-in group"
        >
          <MdOutlineArrowOutward className="text-4xl group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Car;
