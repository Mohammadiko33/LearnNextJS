import React from 'react';

const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <>layout: {children}</>;

export default Page;