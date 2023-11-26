
import { useEffect, useState } from "react";
import { DataContext3, defaultDataValue } from "./context";

const DataContextProvider3: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data3, setData3] = useState<string>('defaultDataValue');
  useEffect(() => {
    function getInitialState() {
      return localStorage.getItem('data3') || '';
    }
    // read data from localstorage
    // localStorage.setItem('data', JSON.stringify(data)s);
    // if localstorage changed
    window.addEventListener('storage', () => {
      setData3(getInitialState);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('data3', data3);
  }, [data3]);

  const setData3B = () => {
  }

  const setData3C = () => {
  }

  const resetData = () => {
    // return (defaultDataValue);
  }

  const clearData = () => {
    return ('');
  }

  return (
    <DataContext3.Provider value={{ data3: data3, setData3: setData3, setData3B: setData3B, setData3C: setData3C, clearData: clearData, resetData: resetData }}>
      {children}
    </DataContext3.Provider>
  )
}

export default DataContextProvider3;