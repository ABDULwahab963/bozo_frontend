import React, { useEffect } from "react";
import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { checkOut, deleteCartItem } from "../../redux/actions/product";
import Loading from "../Loading";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const deleteCartItemHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteCartItem(id));
  };

  const checkOutHandler = (e) => {
    dispatch(checkOut(user?.cart));
  };
  const { message, error, loading } = useSelector((state) => state.product);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }

    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
  }, [error, message]);
  return loading ? (
    <Loading />
  ) : (
    <section className="w-full bg-light_bg min-h-screen">
      <div className="cart-container mt-[124px]">
        <h2 className="text-left">Cart</h2>

        <div className="grid grid-cols-[3fr_1fr] gap-[10px]">
          <div className="w-full">
            <table className="w-full my-[8px]">
              <thead>
                <tr className="w-full">
                  <th>Sr</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {user?.cart && user?.cart?.length > 0
                  ? user.cart.map((c, index) => (
                      <tr key={c.id?._id}>
                        <td>{index + 1}</td>
                        <td>{c.id.name}</td>
                        <td>{c.quantity}</td>
                        <td>PKR {c.amount}</td>
                        <td>
                          <div className="actions">
                            <button
                              onClick={(e) => deleteCartItemHandler(e, c?._id)}
                              className="bg-accent text-sm px-3 py-1 text-white rounded"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
          <div className="w-full bg-white rounded-lg flex flex-col p-[8px]">
            <h2>
              Total Amount: PKR{" "}
              {user?.cart?.reduce(
                (total, item) => total + item.quantity * item.amount,
                0
              )}
            </h2>

            <button onClick={checkOutHandler} className="primary-btn !w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
