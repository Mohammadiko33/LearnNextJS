import React from 'react';
import Counter from "./Components/Counter"

interface Props {
  
}

const about = (props: Props) => {
  return (
    <div className='text-5xl csc'>about <Counter/></div>
  );
};

export default about;