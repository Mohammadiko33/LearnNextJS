import React from "react";
import { IArticles } from "@/app/articles/page";

const Article = ({ image, title, caption, date }: IArticles) => {
  return (
    <div
      className="bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl 
                 border border-zinc-700 p-5 flex flex-col 
                 transform transition-all duration-300 hover:scale-[1.02] 
                 animate-fade-up"
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded-xl"
        />
      ) : (
        <div className="w-full h-48 bg-zinc-800 mb-4 rounded-xl" />
      )}

      <h2 className="text-xl font-bold text-zinc-100 mb-2 line-clamp-2 capitalize tracking-tight">
        {title}
      </h2>

      <p className="text-sm text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
        {caption}
      </p>

      <div className="mt-auto text-right">
        <span className="text-xs text-zinc-500 italic">
          {date || "No date set"}
        </span>
      </div>
    </div>
  );
};

export default Article;
