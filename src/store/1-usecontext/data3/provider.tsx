import { useEffect, useState } from 'react';
import { DataContext, defaultDataValue } from './context';
import { data3, setData3 } from './state';
const DataContextProvider3: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    if (!isFirstTime) {
      // not exist or empty
      localStorage.setItem('data3', data3);
    }
  }, [data3]);
  const value = {
    data3: data3,
    setData3: setData3,
    setData3B: (input: string) => {
      setData3(input);
    },
    setData3C: (input: string) => {
      setData3((prev) => {
        return input;
      });
    },
    resetData: () => {
      setData3(() => {
        return defaultDataValue;
      });
    },
    clearData: () => {
      setData3(() => {
        return '';
      });
    },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataContextProvider3;
