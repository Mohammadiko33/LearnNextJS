"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetProduct } from "@/app/products/page";

interface Props {}

const ProductsClient = (props: Props) => {
  const [products, setProduct] = useState<GetProduct[]>([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then(
      ({ data }) => setProduct(data)
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🛍️ محصولات فروشگاه
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(({ title, id,  image ,  price, rating }: GetProduct) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col"
          >
            {/* <div className="w-full h-48 object-contain mb-4 rounded-lg" /> */}

            <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-contain mb-4 rounded-lg"
                />

            <h2 className="text-lg font-semibold text-gray-700 mb-2 line-clamp-2">
              {title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">${price.toFixed(2)}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm text-yellow-500 font-medium">
                ⭐ {rating.rate}
              </span>
              <span className="text-xs text-gray-400">
                ({rating.count} نظر)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsClient;
