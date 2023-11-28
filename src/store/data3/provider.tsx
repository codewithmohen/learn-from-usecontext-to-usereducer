
import { useEffect, useState } from "react";
import { DataContext3, defaultDataValue } from "./context";

const DataContextProvider3: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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


  const setData3B = (input: string) => {
    setData3(input);
  }

  const setData3C = (input: string) => {
    setData3(prev => { return input });
  }

  const resetData = () => {
    setData3(() => { return defaultDataValue });
  }

  const clearData = () => {
    setData3(() => { return '' });
  }

  return (
    <DataContext3.Provider value={{ data3: data3, setData3: setData3, setData3B: setData3B, setData3C: setData3C, clearData: clearData, resetData: resetData }}>
      {children}
    </DataContext3.Provider>
  )
}

export default DataContextProvider3;