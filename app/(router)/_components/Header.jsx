import { Button } from "@/components/ui/button";
import { BellDot, Menu, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="px-4 flex bg-white items-center">
      <div className="sm:hidden cursor-pointer hover:text-primary transition-all ease-in-out duration-200">
        <Menu />
      </div>
      <div className="p-4 pr-0 bg-white w-full flex justify-between">
        <div className="min-w-10 flex p-2 gap-2 border rounded-md">
          <Search className="text-gray-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none placeholder:text-base w-full"
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <BellDot className="text-gray-500" />
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
