import { useState } from "react";
import { DataContext } from "./context";
import { state } from "./state";
import { IContext } from "./interface";

const Provider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  const [data, setData] = state();

  const value: IContext = {
    data: data,
    setData: setData,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
export default Provider;