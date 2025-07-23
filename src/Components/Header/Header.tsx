"use client";
import React from "react";
import { usePathname , useRouter } from "next/navigation";
import Link from "next/link";

interface Props {}

const Header = (props: Props) => {
  const params = usePathname();
  const router = useRouter();

  const navItems = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "about", link: "/about" },
  ];

  return (
    <header className="w-screen fixed top-0">
      <nav className="px-24 py-8 bg-black flex justify-between items-center">
        <ul className="flex gap-4">
          {navItems.map(({ id, title, link }) => (
            <li key={id}>
              <Link
                href={link}
                className={`capitalize p-3 duration-150 rounded-md hover:bg-[#252525] cursor-pointer text-xl
                ${params === link ? "bg-[#252525]" : ""}
              `}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* <button className="bg-sky-500 capitalize rounded-lg p-3 h-full cursor-pointer duration-150 hover:bg-sky-600 shadow-lg  focus:shadow-sky-600">  </button> */}
      </nav>
    </header>
  );
};

export default Header;