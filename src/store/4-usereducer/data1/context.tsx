
import { createContext } from "react";
import { IAction, Initial_State, IState } from "./reducer";

interface ContextValue {
  data1: string,
  setData1: (payload: string) => void;
  resetData: () => void;
  clearData: () => void;
}

// export const DataContext4 = createContext<{ state: IState, dispatch: React.Dispatch<IAction> }>({
//   state: InitialState,
//   dispatch: () => null,
// });

export const DataContext4 = createContext<ContextValue>({
  data1: Initial_State.data1,
  setData1: () => { },
  resetData: () => { },
  clearData: () => { }
});