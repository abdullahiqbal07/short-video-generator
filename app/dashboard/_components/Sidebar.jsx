"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { Coins, LayoutDashboard, User } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { UserDetails } from "@/app/_context/UserDetailsContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CreateButton from "./CreateButton";

function Sidebar() {
  const { users, setUsers } = useContext(UserDetails);

  const user = users?.[0];

  const path = usePathname();

  const options = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Buy Credit",
      icon: Coins,
      path: "/buy-credits",
    },
    {
      id: 3,
      name: "Profile",
      icon: User,
      path: "/dashboard/profile",
    },
  ];
  return (
    <div className="w-64 h-screen shadow-md fixed p-5">
      <div className="flex items-center">
        <Image src={"/logo.png"} alt={"logo"} width={45} height={35} />
        <h2 className="font-medium text-lg">Video Maker</h2>
      </div>

      <ul className="mt-10">
        <CreateButton />
        {options.map((items, index) => (
          <Link href={items.path} key={index}>
            <li
              className={`flex items-center gap-2 p-3 mt-2 hover:bg-slate-200 rounded-lg text-gray-500 hover:text-black cursor-pointer ${
                path == items.path && "bg-primary text-white"
              }`}
            >
              <items.icon />
              {items.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className="text-sm p-3 rounded-lg border border-gray-500 absolute bottom-10 w-[85%] flex flex-col gap-4">
        <h2 className="font-bold">Total Usage</h2>
        <Progress value={user?.credits * 10} />
        <h2>{10 - user?.credits} minutes out of 10</h2>
      </div>
    </div>
  );
}

export default Sidebar;
