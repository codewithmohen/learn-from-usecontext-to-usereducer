import { useEffect, useState } from 'react';
import { DataContext, defaultDataValue } from './context';
import { state } from './state';
const DataContextProvider3: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [dataChallenge3, setDataChallenge3] = state();
  useEffect(() => {
    function getInitialState() {
      return localStorage.getItem('dataChallenge3') || '';
    }
    setDataChallenge3(getInitialState());
    window.addEventListener('storage', () => {
      setDataChallenge3(getInitialState());
    });
    setIsFirstTime(false);
  }, []);
  useEffect(() => {
    if (!isFirstTime) {
      // not exist or empty
      localStorage.setItem('dataChallenge3', dataChallenge3);
    }
  }, [dataChallenge3]);
  const value = {
    dataChallenge3: dataChallenge3,
    setDataChallenge3: setDataChallenge3,
    setDataChallenge3_2: (input: string) => {
      setDataChallenge3(input);
    },
    setDataChallenge3_3: (input: string) => {
      setDataChallenge3((prev) => {
        return input;
      });
    },
    resetDataChallenge3: () => {
      setDataChallenge3(() => {
        return defaultDataValue;
      });
    },
    clearDataChallenge3: () => {
      setDataChallenge3(() => {
        return '';
      });
    },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataContextProvider3;
