import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <div>
        <Image src="/main.png" alt="Navbar-Logo" width={64} height={64} />
      </div>
      <span className="font-bold text-2xl text-black dark:text-white">DAPZ</span>
    </Link>
  );
};