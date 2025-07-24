import React from 'react';
import { showMassage } from '@/Components/Utiles';

interface Props {}

const about = (props: Props) => {

  showMassage("This is the about page and in only server can access this function");
  
  return (
    <div className='text-5xl csc'>about</div>
  );
};

export default about;