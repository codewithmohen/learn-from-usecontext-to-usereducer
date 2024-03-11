import { useEffect, useState } from 'react';
import { DataContext, defaultDataValue } from './context';
import { state } from './state';
import { IContext } from './interface';
const Provider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [data, setData] = state();

  useEffect(() => {
    function getInitialState() {
      return localStorage.getItem('dataChallenge3') || '';
    }
    setData(getInitialState());
    window.addEventListener('storage', () => {
      setData(getInitialState());
    });
    setIsFirstTime(false);
  }, [setData]);

  useEffect(() => {
    if (!isFirstTime) {
      // not exist or empty
      localStorage.setItem('dataChallenge3', data);
    }
  }, [data, isFirstTime]);

  const value: IContext = {
    data: data,
    setData: setData,
    setData2: (input: string) => {
      setData(input);
    },
    setData3: (input: string) => {
      setData((prev) => {
        return input;
      });
    },
    resetData: () => {
      setData(() => {
        return defaultDataValue;
      });
    },
    clearData: () => {
      setData(() => {
        return '';
      });
    },
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
export default Provider;
