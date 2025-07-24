import React from "react";
import { GetUsers } from "@/app/products-client/page";
// npx json-server --watch db.json --port 8000

interface Props {}

const page = async (props: Props) => {
  const res = await fetch("http://localhost:8000/users" , {
    // cache: "no-store", // to prevent caching issues during development
    // cache: "force-cache", // to ensure the data is always fetched fresh
    next: {
      revalidate: 60, // revalidate every 60 seconds
    }
  });
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 py-10">
      <h1 className="text-3xl font-bold text-zinc-100 mb-8 text-center">
        🛍️ کاربرهای فروشگاه
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map(({ name, id, email, age }: GetUsers) => (
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

export default page;
