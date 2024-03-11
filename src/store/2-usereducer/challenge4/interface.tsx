import { ActionType } from "./reducer";

export interface IState {
  data: string;
}

export interface IContext {
  data: string,
  setData: (payload: string) => void;
  resetData: () => void;
  clearData: () => void;
}

export interface IAction {
  type: ActionType;
  payload: string;
}