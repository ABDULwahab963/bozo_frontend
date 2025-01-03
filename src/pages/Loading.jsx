import React from "react";
import Logo from "../components/Logo";

const Loading = () => {
  return (
    <div className="w-full bg-white h-screen fixed top-0 left-0 z-50 flex items-center justify-center">
      <Logo />
    </div>
  );
};

export default Loading;
