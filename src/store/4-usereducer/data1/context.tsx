
import { createContext } from "react";
import { Action, InitialState, State } from "./reducer";

export const DataContext4 = createContext<{ state: State, dispatch: React.Dispatch<Action> }>({
  state: InitialState,
  dispatch: () => null,
});