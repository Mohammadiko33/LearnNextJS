"use client";
import React from "react";
import { usePathname , useRouter } from "next/navigation";
import Link from "next/link";

interface Props {}

const Header = (props: Props) => {
  const params = usePathname();
  const router = useRouter();

  const handleClick = () => {
    // router.refresh(); // برای رفرش صفحه 
    // router.back(); // برای برگشتن به روت قبلی طبق هیستوری روت
    // router.forward(); // میره به صفحه جلویی
    router.push("/courses"); // ادرسی که میدیم رو در روتمون میزاره
    // router.replace("/article"); // میاد هیستوری مارو پاک میکنه و ادرسی که میدیم رو جایگذاری میکنه توی روت
  }

  const navItems = [
    { id: 1, title: "home", link: "/" },
    { id: 2, title: "login", link: "/login" },
    { id: 3, title: "register", link: "/register" },
    { id: 4, title: "forget password", link: "/forget-password" },
    { id: 5, title: "products", link: "/products" },
  ];


  return (
    <header className="w-screen fixed">
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

        <button className="bg-sky-500 capitalize rounded-lg p-3 h-full cursor-pointer duration-150 hover:bg-sky-600 shadow-lg  focus:shadow-sky-600" onClick={handleClick}>change route with useRouter </button>
      </nav>
    </header>
  );
};

export default Header;
