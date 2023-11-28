import { useState } from "react";
import { DataContext1 } from "./context";

const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data1, setData1] = useState<string>('');
  return (
    <DataContext1.Provider value={{ data1: data1, setData1: setData1 }}>
      {children}
    </DataContext1.Provider>
  )
}

export default DataContextProvider;