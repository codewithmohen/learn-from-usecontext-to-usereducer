
import { useEffect, useState } from "react";
import { DataContext } from "./context";
import { state } from "./state";
const DataContextProvider2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dataChallenge2, setDataChallenge2] = state();
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  useEffect(() => {
    function getInitialState() {
      return localStorage.getItem('dataChallenge2') || '';
    }
    setDataChallenge2(getInitialState());
    window.addEventListener('storage', () => {
      setDataChallenge2(getInitialState());
    });
    setIsFirstTime(false);
  }, []);
  useEffect(() => {
    if (!isFirstTime) { // not exist or empty
      localStorage.setItem('dataChallenge2', dataChallenge2);
    }
  }, [dataChallenge2]);
  const value = {
    dataChallenge2: dataChallenge2,
    setDataChallenge2: setDataChallenge2,
  };
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider >
  )
}
export default DataContextProvider2;