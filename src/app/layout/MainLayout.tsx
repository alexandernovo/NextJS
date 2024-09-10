"use client";
import React, { useState } from "react";
import { SideBar } from "../components/SideBar";
import { Navbar } from "../components/Navbar";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = (
  props: MainLayoutProps
) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const currentRoute = usePathname();
  const excludeRoute = ["/login"];

  const openDrawer = () => {
    setToggle(!toggle);
  };

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      {!excludeRoute.includes(currentRoute) && (
        <>
          <Navbar OpenDrawer={openDrawer} />
          <SideBar Toggle={toggle} />
        </>
      )}
      <main className="p-4 md:ml-64 h-auto pt-20">{props.children}</main>
    </div>
  );
};
