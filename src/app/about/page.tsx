import React from 'react';
import Counter from "./Components/Counter"
import ServerRFC from './Components/ServerRFC';

interface Props {}

const about = (props: Props) => {
  return (
    <div className='text-5xl csc'>about <Counter><ServerRFC/></Counter></div>
  );
};

export default about;