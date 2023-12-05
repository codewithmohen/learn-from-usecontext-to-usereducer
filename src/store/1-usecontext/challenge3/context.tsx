
import { createContext } from "react";
interface IContext {
  dataChallenge3: string;
  setDataChallenge3: React.Dispatch<React.SetStateAction<string>>;
  setDataChallenge3_2: (input: string) => void;
  setDataChallenge3_3: (input: string) => void;
  clearDataChallenge3: () => void;
  resetDataChallenge3: () => void;
}
export const defaultDataValue = 'Default Value';
const Initialize: IContext = {
  dataChallenge3: '',
  setDataChallenge3: () => { },
  setDataChallenge3_2: () => { },
  setDataChallenge3_3: () => { },
  clearDataChallenge3: () => { },
  resetDataChallenge3: () => { }
};
export const DataContext = createContext<IContext>(Initialize);