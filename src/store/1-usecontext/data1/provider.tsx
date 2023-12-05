import { useState } from "react";
import { DataContext } from "./context";
import { data1, setData1 } from "./state";
const DataContextProvider1: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    data1: data1,
    setData1: setData1,
  };
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
export default DataContextProvider1;