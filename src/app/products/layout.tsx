import React from 'react';

const ProductLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='rsc text-5xl'>product layout: {children}</div>
  );
};

export default ProductLayout;