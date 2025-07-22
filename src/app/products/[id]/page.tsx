import React from "react";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div className='rsc text-5xl capitalize'>product id : {id}</div>
  )
};

export default page;
