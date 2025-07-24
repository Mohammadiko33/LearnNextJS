"use client";
import { useContext , useState } from 'react';
import UserContext from '@/Components/contexts/userContext';
import type { IUser } from '@/Components/contexts/userContext';

interface Props {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {

    const [user, setUser] = useState<IUser | null>({
        id: 1,
        name: 'mohammad iko',
        email: 'mohammadiko@gamil.com',
        age: 21
    });
    
  return (
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
  );
};

export default Layout;