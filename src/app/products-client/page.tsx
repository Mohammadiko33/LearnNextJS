"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { showMassage } from "@/Components/Utiles";

interface Props {}

export interface GetUsers {
  id: number | string,
  name: string,
  email: string,
  age: number
}

const ProductsClient = (props: Props) => {
  const [users, setUsers] = useState<GetUsers[]>([]);

    // showMassage("This is the about page and in only server can access this function");


  useEffect(() => {
    axios("http://localhost:8000/users").then(
      ({ data }) => setUsers(data)
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-8 text-center">
        🛍️ کاربرهای فروشگاه
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map(({ name, id, email, age }: GetUsers) => (
          <div
            key={id}
            className="bg-zinc-900 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col border border-zinc-700"
          >
            <div className="w-full h-48 object-contain mb-4 rounded-lg bg-zinc-800" />

            <h2 className="text-lg font-semibold text-zinc-100 mb-2 line-clamp-2">
              {name}
            </h2>
            <p className="text-sm text-zinc-400 mb-4">{email}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-zinc-500">{age}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsClient;
