import React from "react";
import type { Metadata } from "next";

interface Props {}

export const metadata: Metadata = {
  title: "login", // login | Leach shop : طبق تمپلیت صفحه لیوت  تایتلی که اینجا نوشتیم میره جای درصد اس میشینه توی فایل لیوت 
};

const Login = (props: Props) => {
  return <div className="text-5xl">Login</div>;
};

export default Login;
