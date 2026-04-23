"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 10);
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const scrollKeProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed w-full h-[100px] max-md:h-[60px] top-0 left-0 z-50 flex flex-row justify-between items-center px-[50px] max-md:px-[20px] py-[30px]"
      style={{
        background: "linear-gradient(315deg, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 100%)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 1px 0 0 rgba(255,255,255,0.1) inset",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 300ms ease-in-out",
      }}
    >
      <div className="h-[70px] w-[224px] max-md:w-[150px] items-center justify-center flex flex-row">
        <Image
          src="/mitsubishi.png"
          alt="logo"
          width={512}
          height={512}
          className="w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px]"
          priority
          unoptimized
        />
        <h1 className="text-[20px] max-md:text-[13px] font-bold text-putih text-center">
          MITSUBISHI MOTORS
        </h1>
      </div>

      <button
        onClick={scrollKeProducts}
        className="text-[23px] max-md:text-[15px] text-center text-putih font-medium bg-transparent border-none cursor-pointer"
      >
        Products
      </button>
    </div>
  );
};

export default Header;