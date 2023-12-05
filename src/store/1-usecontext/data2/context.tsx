import { createContext } from "react";
interface IContext {
  data2: string;
  setData2: React.Dispatch<React.SetStateAction<string>>;
}
const Initialize: IContext = {
  data2: '',
  setData2: () => { }
};
export const DataContext = createContext<IContext>(Initialize);