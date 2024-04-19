"use client";
import { useUser } from "@clerk/nextjs";
import {
  BadgeIcon,
  BookOpen,
  GraduationCap,
  LayoutGrid,
  Mail,
  Store,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const SideNav = () => {
  const { user } = useUser();
  const menu = [
    {
      id: 6,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: "/courses",
      auth: true,
    },
    {
      id: 2,
      name: "Store",
      icon: LayoutGrid,
      path: "/store",
      auth: true,
    },
    {
      id: 3,
      name: "Membership",
      icon: BadgeIcon,
      path: "/membership",
      auth: true,
    },
    {
      id: 4,
      name: "Be Instructor",
      icon: GraduationCap,
      path: "/instructor",
      auth: true,
    },
    {
      id: 5,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
      auth: true,
    },
  ];

  const path = usePathname();

  return (
    <div className="p-5 bg-white shadow-sm border h-dvh h-screen">
      <div className="text-4xl text-primary font-extrabold">SevaWo</div>
      <div className="h-[0.12rem] bg-gray-500 w-full mt-7 mb-7"></div>
      {menu.map(
        (item, index) =>
          item.auth && (
            <Link key={index} href={item.path}>
              <div
                key={index}
                className={`group flex gap-3 mt-1 p-3 text-gray-500 hover:bg-primary hover:text-white cursor-pointer rounded-md transition-all ease-in-out duration-200 items-center ${
                  path.includes(item.path) && "bg-primary text-white"
                }`}
              >
                <item.icon className="group-hover:animate-bounce" />
                <h2>{item.name}</h2>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default SideNav;
