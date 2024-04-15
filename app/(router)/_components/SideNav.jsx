import {
  BadgeIcon,
  BookOpen,
  GraduationCap,
  LayoutGrid,
  Mail,
  Store,
} from "lucide-react";
import React from "react";

const SideNav = () => {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Store",
      icon: LayoutGrid,
    },
    {
      id: 3,
      name: "Membership",
      icon: BadgeIcon,
    },
    {
      id: 4,
      name: "Be Instructor",
      icon: GraduationCap,
    },
    {
      id: 5,
      name: "Newsletter",
      icon: Mail,
    },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-dvh h-screen">
      <div className="text-4xl text-primary font-extrabold">SevaWo</div>
      <div className="h-[0.12rem] bg-gray-500 w-full mt-7 mb-7"></div>
      {menu.map((item, index) => (
        <div
          key={index}
          className="group flex gap-3 mt-1 p-3 text-gray-500 hover:bg-primary hover:text-white cursor-pointer rounded-md transition-all ease-in-out duration-200 items-center"
        >
          <item.icon className="group-hover:animate-bounce" />
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
