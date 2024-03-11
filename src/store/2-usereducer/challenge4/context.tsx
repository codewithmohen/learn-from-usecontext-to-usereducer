
import { createContext } from "react";
import { IContext } from "./interface";

const Initialize: IContext = {
  data: '',
  setData: () => { },
  resetData: () => { },
  clearData: () => { }
};

export const DataContext = createContext<IContext>(Initialize);