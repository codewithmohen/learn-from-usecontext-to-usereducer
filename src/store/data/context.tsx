import { createContext } from "react";

interface Type {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const Initialize: Type = {
  data: '',
  setData: () => { }
};

export const DataContext = createContext<Type>(Initialize);