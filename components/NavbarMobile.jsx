"use client";

import { NavLinks } from "@/utils/NavLinks";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavbarMobile = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      <div onClick={openNav} className="z-[888]">
        {nav ? (
          <X className="w-8 h-8 cursor-pointer md:hidden text-white" />
        ) : (
          <AlignJustify className="w-8 h-8 cursor-pointer md:hidden" />
        )}
      </div>
      <div
        className={`
                fixed top-0 left-0 w-full h-screen bg-black/90 z-[200] 
                transform transition-transform duration-300  
                ${nav ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8 text-2xl">
          {NavLinks.map((item, index) => {
            return (
              <Link key={index} href={item.path} onClick={closeNav}>
                <h3 className="hover:text-amber-500 hover:font-semibold text-white">
                  {" "}
                  {item.label}{" "}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
      F
    </div>
  );
};
export default NavbarMobile;
