import { createContext } from "react";
interface IContext {
  dataChallenge2: string;
  setDataChallenge2: React.Dispatch<React.SetStateAction<string>>;
}
const Initialize: IContext = {
  dataChallenge2: '',
  setDataChallenge2: () => { }
};
export const DataContext = createContext<IContext>(Initialize);