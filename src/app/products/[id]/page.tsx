import { notFound } from "next/navigation";

interface Props {
  params: { id: string }; // نه Promise!
  searchParams?: Record<string, string | string[] | undefined>;
}

const ProductPage = async ({ params }: Props) => {
  // نیازی به await 
  // نیست، چون Next.js
  //  خودش آن را resolve می‌کند
  const { id } = params;

  const idNumber = Number(id);
  if (isNaN(idNumber) || idNumber > 100) return notFound();

  return <div className="rsc text-5xl capitalize">product id : {id}</div>;
};

export default ProductPage;