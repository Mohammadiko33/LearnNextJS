"use client";
import React, { useState } from "react";

interface Props {children: React.ReactNode}

const Page = ({children}: Props) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="cursor-pointer mt-6" onClick={() => setCount(count + 1)}>
      counter {count} {children}
    </div>
  );
};

export default Page;