
import { useEffect, useState } from "react";
import { DataContext3, defaultDataValue } from "./context";

const DataContextProvider2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<string>('defaultDataValue');
  useEffect(() => {
    function getInitialState() {
      return JSON.parse(localStorage.getItem('data') || '');
    }
    // read data from localstorage
    // localStorage.setItem('data', JSON.stringify(data)s);
    // if localstorage changed
    window.addEventListener('storage', () => {
      setData(getInitialState);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('data', data);
  }, [data]);

  const setData2 = () => {
  }

  const setData3 = () => {
  }

  const resetData = () => {
    return (defaultDataValue);
  }

  const clearData = () => {
    return ('');
  }

  return (
    <DataContext3.Provider value={{ data: data, setData: setData, setData2: setData2, setData3: setData3, clearData: clearData, resetData: resetData }}>
      {children}
    </DataContext3.Provider>
  )
}

export default DataContextProvider2;