import React from "react";
import { IArticles } from "@/app/articles/page";
import Container from "@/Components/Container";
import ArticleActions from "@/Components/ArticleActions";

interface Props {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

export const dynamic = 'force-dynamic'; // این خط رو اضافه کنید

const page = async ({ params }: Props) => {
  const { id } = params;
  const res = await fetch(`http://localhost:8000/articles/${id}`);
  const { image, title, caption, date }: IArticles = await res.json();

  return (
    <Container>
      <div className="mt-16 flex flex-col md:flex-row bg-zinc-900 text-zinc-100 rounded-xl overflow-hidden shadow-lg min-h-[20rem] gap-4 items-stretch">
        {image && (
          <div className="w-full md:w-1/3 max-w-xs h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        )}

        <div className="w-full md:flex-1 p-6 flex flex-col justify-start text-left">
          <div className="flex items-center justify-between flex-wrap">
            <h2 className="text-2xl font-bold mb-3 leading-snug">{title}</h2>
            <p className="text-sm text-zinc-400 mb-3">
              {date || "No date set"}
            </p>
          </div>
          <p className="text-base leading-relaxed text-zinc-200">{caption}</p>
        <ArticleActions id={id} title={title} caption={caption}/>
        </div>
      </div>
    </Container>
  );
};

export default page;
