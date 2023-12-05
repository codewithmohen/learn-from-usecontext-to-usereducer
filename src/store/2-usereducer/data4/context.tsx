
import { createContext } from "react";

interface IContext {
  data4: string,
  setData: (payload: string) => void;
  resetData: () => void;
  clearData: () => void;
}

const Initialize: IContext = {
  data4: '',
  setData: () => { },
  resetData: () => { },
  clearData: () => { }
};

export const DataContext = createContext<IContext>(Initialize);