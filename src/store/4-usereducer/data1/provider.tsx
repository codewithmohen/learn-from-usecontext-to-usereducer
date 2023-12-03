
import { useEffect, useReducer, useState } from "react";
import { DataContext4 } from "./context";
import reducer, { InitialState } from "./reducer";

const DataContextProvider4 = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [data3, setData3] = useState<string>('');
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  useEffect(() => {
    function getInitialState() {
      return localStorage.getItem('data3') || '';
    }
    setData3(getInitialState());
    window.addEventListener('storage', () => {
      setData3(getInitialState());
    });
    setIsFirstTime(false);
  }, []);

  useEffect(() => {
    if (!isFirstTime) { // not exist or empty
      localStorage.setItem('data3', data3);
    }
  }, [data3]);
  return (
    <>
      {children}
    </>
    // <DataContext4.Provider value={{ data1: data1, setData3: setData3, setData3B: setData3B, setData3C: setData3C, clearData: clearData, resetData: resetData }}>
    //   {children}
    // </DataContext4.Provider>
  )
}

export default DataContextProvider4;