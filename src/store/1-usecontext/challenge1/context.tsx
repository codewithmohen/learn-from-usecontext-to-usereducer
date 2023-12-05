import { createContext } from 'react';
interface IContext {
  dataChallenge1: string;
  setDataChallenge1: React.Dispatch<React.SetStateAction<string>>;
}
const Initialize: IContext = {
  dataChallenge1: '',
  setDataChallenge1: () => { },
};
export const DataContext = createContext<IContext>(Initialize);
