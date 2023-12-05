
import { createContext } from "react";
import { IAction, Initial_State, IState } from "./reducer";

interface ContextValue {
  data4: string,
  setData: (payload: string) => void;
  resetData: () => void;
  clearData: () => void;
}

export const DataContext4 = createContext<ContextValue>({
  data4: '',
  setData: () => { },
  resetData: () => { },
  clearData: () => { }
});