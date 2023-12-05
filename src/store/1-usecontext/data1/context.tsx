import { createContext } from 'react';
interface IContext {
  data1: string;
  setData1: React.Dispatch<React.SetStateAction<string>>;
}
const Initialize: IContext = {
  data1: '',
  setData1: () => { },
};
export const DataContext = createContext<IContext>(Initialize);
