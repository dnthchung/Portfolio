import React, { useState } from "react";
import Logo from "../assets/catFavi.png";
import { Link, Outlet } from "react-router-dom";
import { AlignRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md border">
      <div className="max-w-5xl mx-auto px-20">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center hover:cursor-pointer">
            <img className="block lg:hidden h-8 w-auto" src={Logo} alt="Logo" />
            <img className="hidden lg:block h-8 w-auto" src={Logo} alt="Logo" />
            <p className="text-xl font-bo text-black font-mono size-3 pl-1">
              Chung
            </p>
          </div>
          {/* Navbar links */}
          <div className="hidden lg:flex flex-grow justify-end">
            <ul className="flex items-center gap-3">
              <li className="text-gray-900 dark:text-gray-200 px-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-100">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-gray-900 dark:text-gray-200 px-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-100">
                <Link to="/notes">Note</Link>
              </li>
              <li className="text-gray-900 dark:text-gray-200 px-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-100">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="text-gray-900 dark:text-gray-200 px-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-100">
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
          {/* Dropdown menu for small screens */}
          <div className="lg:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2  hover:bg-gray-100 rounded-full">
                <AlignRight className="opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>Note</DropdownMenuItem>
                <DropdownMenuItem>Resume</DropdownMenuItem>
                <DropdownMenuItem>Project</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center pl-5">
            <Switch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
