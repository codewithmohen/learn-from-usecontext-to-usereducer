
import { createContext } from "react";


interface Type {
  data3: string;
  setData3: React.Dispatch<React.SetStateAction<string>>;
  setData3B: (input: string) => void;
  setData3C: (input: string) => void;
  clearData: () => void;
  resetData: () => void;
}

export const defaultDataValue = 'Default Value';

const Initialize: Type = {
  data3: '',
  setData3: () => { },
  setData3B: () => { },
  setData3C: () => { },
  clearData: () => { },
  resetData: () => { }
};

export const DataContext3 = createContext<Type>(Initialize);