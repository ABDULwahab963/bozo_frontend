import React, { useEffect } from "react";
import Car from "../../../components/Car";
import Filter from "../../../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../../redux/actions/product";

const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <section className="w-full min-h-screen bg-light_bg">
      <div className="mt-[124px] ">
        <Filter />
        <div className="cars-container grid grid-cols-3 gap-[16px] mt-[16px]">
          {products && products.length > 0
            ? products.map((p, index) => <Car id={p._id} image={p.image.url} />)
            : "No Cars Found"}
        </div>
      </div>
    </section>
  );
};

export default Shop;
