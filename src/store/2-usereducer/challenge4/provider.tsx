
import { useEffect, useReducer, useState } from "react";
import { DataContext } from "./context";
import { reducer, Initial_State, ActionType } from "./reducer";
import { IContext } from "./interface";

const Provider = ({ children }: { children: React.ReactNode; }) => {
  const [state, dispatch] = useReducer(reducer, Initial_State);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

  useEffect(() => {
    function getInitialState() {
      let storage = localStorage.getItem('dataChallenge4') || '';
      dispatch({ type: ActionType.SET_DATA, payload: storage });
      return storage;
    }
    getInitialState();
    window.addEventListener('storage', () => {
      getInitialState();
    });
    setIsFirstTime(false);
  }, []);

  useEffect(() => {
    if (!isFirstTime) { // not exist or empty
      localStorage.setItem('dataChallenge4', state.data);
    }
  }, [isFirstTime, state.data]);

  const value: IContext = {
    data: state.data,
    setData: (payload: string) => {
      dispatch({ type: ActionType.SET_DATA, payload });
    },
    resetData: () => {
      dispatch({ type: ActionType.RESET_DATA, payload: '' });
    },
    clearData: () => {
      dispatch({ type: ActionType.CLEAN_DATA, payload: '' });
    }
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider >
  );
};
export default Provider;