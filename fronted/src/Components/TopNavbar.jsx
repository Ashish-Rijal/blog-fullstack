import React from "react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { AArrowDown } from "lucide-react";
import { Send } from "lucide-react";
import { NavLink } from "react-router";

export default function TopNavbar() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500  ">
    <div className="w-11/12 md:w-8/12 mx-auto flex justify-between py-2 text-white">
      <div className="hidden md:block">
      <div className="flex gap-4">
        <Instagram />
        <Twitter />
        <Send />
        <AArrowDown />
      </div>
      </div>

      <div className="flex items-center gap-4">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <p>-</p>
        <NavLink to="/login">Login</NavLink>
        <p>-</p>
        <NavLink to="/contact">Contact</NavLink>

      </div>
    </div>
    </div>
  );
}
