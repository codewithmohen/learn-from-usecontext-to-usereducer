
import { useEffect, useState } from "react";
import { DataContext2 } from "./context";

const DataContextProvider2: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [data2, setData2] = useState<string>('');

  useEffect(() => {
    function getInitialState() {
      return JSON.parse(localStorage.getItem('data2') || '');
    }
    // read data from localstorage
    // localStorage.setItem('data', JSON.stringify(data)s);
    // if localstorage changed
    window.addEventListener('storage', () => {
      setData2(getInitialState);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('data2', data2);
  }, [data2]);

  return (
    <DataContext2.Provider value={{ data2: data2, setData2: setData2 }}>
      {children}
    </DataContext2.Provider>
  )
}
export default DataContextProvider2;