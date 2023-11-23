import { useState } from "react";
import { DataContext } from "./context";

const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<string>('');
  return (
    <DataContext.Provider value={{ data: data, setData: setData }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;