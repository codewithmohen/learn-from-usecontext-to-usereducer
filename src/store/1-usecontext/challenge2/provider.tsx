
import { useEffect, useState } from "react";
import { DataContext } from "./context";
import { state } from "./state";
import { IContext } from "./interface";
const Provider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  const [data, setData] = state();
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

  useEffect(() => {
    function getInitialState() {
      return localStorage.getItem('dataChallenge2') || '';
    }
    setData(getInitialState());
    window.addEventListener('storage', () => {
      setData(getInitialState());
    });
    setIsFirstTime(false);
  }, [setData]);

  useEffect(() => {
    if (!isFirstTime) { // not exist or empty
      localStorage.setItem('dataChallenge2', data);
    }
  }, [data, isFirstTime]);

  const value: IContext = {
    data: data,
    setData: setData,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider >
  );
};
export default Provider;