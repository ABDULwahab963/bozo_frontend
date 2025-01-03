import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Car from "./Car";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/actions/product";

const FeaturedCars = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <section className="w-full">
      <div className="w-full flex justify-between items-center">
        <h2>Featured Cars</h2>
        <Link className="text-accent">View All</Link>
      </div>

      <div className="cars-container grid grid-cols-3 gap-[16px] my-[32px]">
        {products && products.length > 0
          ? products.map((p, index) => <Car id={p._id} image={p.image.url} />)
          : "No Cars Found"}
      </div>
    </section>
  );
};

export default FeaturedCars;
