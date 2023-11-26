
import { createContext } from "react";


interface Type {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  setData2: React.Dispatch<React.SetStateAction<string>>;
  setData3: React.Dispatch<React.SetStateAction<string>>;
  clearData: React.Dispatch<React.SetStateAction<string>>;
  resetData: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultDataValue = 'Default Value';

const Initialize: Type = {
  data: '',
  setData: () => { },
  setData2: () => { },
  setData3: () => { },
  clearData: () => { },
  resetData: () => { }
};

export const DataContext3 = createContext<Type>(Initialize);