import React from "react";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;

  if (+id > 100) return notFound();

  return (
    <div className='rsc text-5xl capitalize'>product id : {id}</div>
  )
};

export default page;
