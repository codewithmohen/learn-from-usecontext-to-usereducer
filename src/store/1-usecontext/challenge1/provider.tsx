import { useState } from "react";
import { DataContext } from "./context";
import { state } from "./state";
const DataContextProvider1: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dataChallenge1, setDataChallenge1] = state();
  const value = {
    dataChallenge1: dataChallenge1,
    setDataChallenge1: setDataChallenge1,
  };
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}
export default DataContextProvider1;