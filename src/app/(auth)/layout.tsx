"use client";
import React, { useState } from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [val, setVal] = useState<string>("");

  return (
    <div className="csc">
      <p>this is layout (auth) : </p>
      <input
        className="bg-blue-950 outline-0 my-5 p-3 rounded-md"
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      {children}
      <p className="mt-3">{val}</p>
    </div>
  );
};

export default AuthLayout;
