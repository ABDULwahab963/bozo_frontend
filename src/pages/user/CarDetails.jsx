import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCarById } from "../../redux/actions/product";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const CarDetails = () => {
  const dispatch = useDispatch();
  const { product, message, error } = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCarById(id));
  }, []);

  const addToCartHandler = (e, id) => {
    dispatch(addToCart(id));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, []);

  return (
    <section className="w-full min-h-screen bg-light_bg">
      <div className="car-details mt-[124px] grid grid-cols-2 gap-[16px]">
        <div className="w-full h-[600px] bg-red-300 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={product?.image.url}
            alt=""
          />
        </div>

        <div>
          <span className="text-accent">{product?.brand}</span>
          <h1 className="text-3xl font-[500]">{product?.name}</h1>
          <p>{product?.description}</p>

          <h2 className="text-left my-[8px]">PKR {product?.price}</h2>

          <button
            onClick={(e) => addToCartHandler(e, product?._id)}
            className="primary-btn"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
