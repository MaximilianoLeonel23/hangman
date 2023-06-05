import React from "react";
import logo from "../assets/icons/logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-8 w-8">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
