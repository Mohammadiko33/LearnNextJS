"use client"
import { createContext } from "react";

export interface IUser {
  id: number | string;
  name: string;
  email: string;
  age: number;
}

const UserContext = createContext<{
  user: IUser | null;
}>({
  user: null,
});

export default UserContext;
