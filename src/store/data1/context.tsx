import { createContext } from "react";

interface Type {
  data1: string;
  setData1: React.Dispatch<React.SetStateAction<string>>;
}

const Initialize: Type = {
  data1: '',
  setData1: () => { }
};

export const DataContext1 = createContext<Type>(Initialize);