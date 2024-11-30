import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image src="/cinema.png" width={32} height={32} alt="logo" />
      <div className="relative">
        <h1 className="capitalize text-white text-xl font-bold tracking-wide">
          Movies Land
        </h1>
      </div>
    </Link>
  );
};

export default Logo;