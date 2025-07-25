import React from "react";
import Article from "@/Components/Article";
import Container from "@/Components/Container";
import Link from "next/link";

export interface IArticles {
  id?: string | number;
  image?: string;
  title: string;
  caption: string;
  date?: string;
}

const Articles = async () => {
  const res = await fetch("http://localhost:8000/articles");
  const articleItems = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 py-10">
      <Container>

      <h1 className="text-3xl font-bold text-zinc-100 mb-8 text-center">
        {articleItems ? "📑 Articles" : "article's not defined"}
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articleItems.map((item: IArticles) => (
          <Link
          href={`/articles/${item.id}`}
          key={item.id}
          className="block"
          >
            <Article {...item} />
          </Link>
        ))}
      </div>
        </Container>
    </div>
  );
};

export default Articles;
