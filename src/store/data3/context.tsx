
import { createContext } from "react";


interface Type {
  data3: string;
  setData3: React.Dispatch<React.SetStateAction<string>>;
  setData3B: React.Dispatch<React.SetStateAction<string>>;
  setData3C: React.Dispatch<React.SetStateAction<string>>;
  clearData: React.Dispatch<React.SetStateAction<string>>;
  resetData: React.Dispatch<React.SetStateAction<string>>;
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