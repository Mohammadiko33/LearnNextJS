"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/Components/Container";

interface Props {}

const Header: React.FC<Props> = () => {
  const pathname = usePathname();

  const navItems = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "articles", link: "/articles" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 bg-black z-50">
      <nav className="py-6">
        <Container>
          <ul className="flex gap-6">
            {navItems.map(({ id, title, link }) => (
              <li key={id}>
                <Link
                  href={link}
                  className={`capitalize p-3 rounded-md text-xl cursor-pointer duration-150 hover:bg-[#252525] ${
                    pathname === link ? "bg-[#252525]" : ""
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
