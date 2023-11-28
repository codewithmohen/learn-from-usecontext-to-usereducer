
import { createContext } from "react";

interface Type {
  data2: string;
  setData2: React.Dispatch<React.SetStateAction<string>>;
}

const Initialize: Type = {
  data2: '',
  setData2: () => { }
};

export const DataContext2 = createContext<Type>(Initialize);