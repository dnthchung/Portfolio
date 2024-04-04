import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <>
      <div className="">
        <div className=" container mt-16">
          <div className=" md:container grid grid-cols-5">
            {/* avatar area */}
            <div className="avatar-area col-start-1 h-auto col-span-2 flex items-center justify-center">
              <div class="relative">
                <img
                  class="w-52 h-52 rounded-full shadow-2xl"
                  src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felix"
                  alt="avatar"
                />
                {/* <span class="animate-ping opacity-75 top-0 left-7 absolute w-7 h-7 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                <span class="top-0 left-7 absolute w-7 h-7 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
              </div>
            </div>
            {/* in4 area */}
            <div className="information-area col-start-3 col-span-3">
              <div className="flex flex-col gap-2 py-10 px-10">
                <p className="text-3xl">My name is Chung.</p>
                <p>
                  I am currently a final-year software engineering student at
                  FPT University. This is my personal website, where you can see
                  my personal information, knowledge, and understanding from a
                  programmer's perspective.
                </p>
                <Link to="/resume" className="underline italic">
                  My resume
                </Link>
              </div>
            </div>
            <div className="col-start-3  col-span-3 flex w-full max-w-sm items-center space-x-2 px-10">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
