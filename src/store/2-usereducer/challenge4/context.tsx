
import { createContext } from "react";

interface IContext {
  dataChallenge4: string,
  setDataChallenge4: (payload: string) => void;
  resetDataChallenge4: () => void;
  clearDataChallenge4: () => void;
}

const Initialize: IContext = {
  dataChallenge4: '',
  setDataChallenge4: () => { },
  resetDataChallenge4: () => { },
  clearDataChallenge4: () => { }
};

export const DataContext = createContext<IContext>(Initialize);