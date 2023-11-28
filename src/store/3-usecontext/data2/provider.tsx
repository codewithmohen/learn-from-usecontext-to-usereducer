
import { useEffect, useState } from "react";
import { DataContext2 } from "./context";

const DataContextProvider2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data2, setData2] = useState<string>('');
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  useEffect(() => {
    function getInitialState() {
      return localStorage.getItem('data2') || '';
    }
    setData2(getInitialState());

    window.addEventListener('storage', () => {
      setData2(getInitialState());
    });
    setIsFirstTime(false);
  }, []);

  useEffect(() => {
    if (!isFirstTime) { // not exist or empty
      localStorage.setItem('data2', data2);
    }
  }, [data2]);

  return (
    <DataContext2.Provider value={{ data2: data2, setData2: setData2 }}>
      {children}
    </DataContext2.Provider>
  )
}
export default DataContextProvider2;