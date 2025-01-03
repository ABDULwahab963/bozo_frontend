import React, { useState } from "react";
import { assets } from "../../../utils/assets";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <section className="w-full !h-screen overflow-hidden">
      <div className="w-full h-full grid grid-cols-[1.2fr_3fr] gap-[16px]">
        <div className="w-full h-full flex flex-col justify-center items-center relative">
          <div className="w-full absolute top-0 left-0">
            <Logo />
          </div>
          <form action="" className="!p-0" onSubmit={submitHandler}>
            <div className="mb-[8px]">
              <h3 className="text-3xl font-medium">Login</h3>
              <p className="text-zinc-600">
                Enter your email and password to Login
              </p>
            </div>
            <label htmlFor="">
              <span>Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
              />
            </label>

            <label htmlFor="">
              <span>Passowrd</span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Your Password"
              />
            </label>

            <button className="!w-full primary-btn mt-[8px]">Login</button>

            <p className="text-center">
              New Here?{" "}
              <Link to={"/register"} className="text-accent">
                Create Account
              </Link>
            </p>
          </form>
        </div>

        <div className="w-full h-full rounded-lg overflow-hidden bg-light_bg">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            src={assets.bg_video}
            className="w-full h-full object-cover object-center"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Login;
