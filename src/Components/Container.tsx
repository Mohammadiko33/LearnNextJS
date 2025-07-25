import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
