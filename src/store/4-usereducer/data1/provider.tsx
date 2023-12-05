
import { useEffect, useReducer, useState } from "react";
import { DataContext4 } from "./context";
import { reducer, Initial_State, ActionType } from "./reducer";

const DataContextProvider4 = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, Initial_State);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  useEffect(() => {
    function getInitialState() {
      dispatch({ type: ActionType.RESET_DATA, payload: '' })
    }
    getInitialState();
    window.addEventListener('storage', () => {
      getInitialState();
    });
    setIsFirstTime(false);
  }, []);

  useEffect(() => {
    if (!isFirstTime) { // not exist or empty
      localStorage.setItem('data1', state.data4);
    }
  }, [state.data4]);

  const setData1 = (input: string) => {
    dispatch({ type: ActionType.SET_STATE, payload: 'input' })
  }

  const resetData = () => {
    dispatch({ type: ActionType.RESET_DATA, payload: '' });
  }

  const clearData = () => {
    dispatch({ type: ActionType.CLEAN_DATA, payload: '' });
  }


  const value = {
    data4: state.data4,
    setData: (payload: string) => {
      dispatch({ type: ActionType.SET_STATE, payload })
    },
    resetData: () => {
      dispatch({ type: ActionType.RESET_DATA, payload: '' });
    },
    clearData: () => {
      dispatch({ type: ActionType.CLEAN_DATA, payload: '' });
    }
  };

  return (
    <DataContext4.Provider value={value}>
      {children}
    </DataContext4.Provider >
  )
}

export default DataContextProvider4;