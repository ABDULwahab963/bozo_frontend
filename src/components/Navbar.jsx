import React from "react";
import { assets } from "../utils/assets";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/user";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const isActive = (path) => {
    if (location.pathname === path) {
      return true;
    }
    return false;
  };
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <nav
      className={`
        ${
          location.pathname === "/login" || location.pathname === "/register"
            ? "hidden"
            : "fixed"
        }
        px-[20px] fixed top-[40px] ${
          location.pathname === "/" && location.pathname !== "/login"
            ? "left-[30px] right-[30px]"
            : "left-[0px] right-[0px]"
        }  z-[20]`}
    >
      <div className="w-full bg-white p-[10px] rounded-lg flex items-center justify-between">
        <Logo />
        <div className="tags flex gap-[16px]">
          {[
            { value: "/", label: "Home" },
            { value: "/shop", label: "Shop" },
            { value: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              className={`${
                isActive(l.value) ? "text-accent" : "text-zinc-500"
              }  duration-150 hover:text-black ease-linear`}
              to={l.value}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="actions">
          {isAuthenticated ? (
            <div className="flex items-center gap-[16px]">
              <Link to={'/cart'}>
                <IoCartOutline className="text-3xl"/>
              </Link>
              <button onClick={logoutHandler} className="primary-btn">
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"} className="primary-btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
