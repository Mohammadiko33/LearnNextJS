"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {}

const Header = (props: Props) => {
  const params = usePathname();

  const navItems = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "login", link: "/login" },
    { id: 3, title: "register", link: "/register" },
    { id: 4, title: "forget password", link: "/forget-password" },
    { id: 5, title: "products", link: "/products" },
  ];


  return (
    <header className="w-screen fixed">
      <nav className="px-24 py-10 bg-black">
        <ul className=" flex gap-4">
          {navItems.map(({ id, title, link }) => (
            <li key={id}>
              <Link
                href={link}
                className={`capitalize px-3 py-3 duration-150 rounded-md hover:bg-[#252525] cursor-pointer text-xl
                ${params === link ? "bg-[#252525]" : ""}
              `}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
