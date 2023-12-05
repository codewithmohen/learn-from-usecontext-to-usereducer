
import { useEffect, useReducer, useState } from "react";
import { DataContext } from "./context";
import { reducer, Initial_State, ActionType } from "./reducer";

const DataContextProvider4 = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, Initial_State);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  useEffect(() => {
    function getInitialState() {
      let storage = localStorage.getItem('dataChallenge4') || '';
      dispatch({ type: ActionType.SET_STATE, payload: storage })
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
      localStorage.setItem('dataChallenge4', state.dataChallenge4);
    }
  }, [state.dataChallenge4]);
  const value = {
    dataChallenge4: state.dataChallenge4,
    setDataChallenge4: (payload: string) => {
      dispatch({ type: ActionType.SET_STATE, payload })
    },
    resetDataChallenge4: () => {
      dispatch({ type: ActionType.RESET_DATA, payload: '' });
    },
    clearDataChallenge4: () => {
      dispatch({ type: ActionType.CLEAN_DATA, payload: '' });
    }
  };
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider >
  )
}
export default DataContextProvider4;