import { IAction, IState } from "./interface";

export enum ActionType {
  SET_DATA = 'SET_DATA',
  RESET_DATA = 'RESET_DATA',
  CLEAN_DATA = 'CLEAN_DATA'
}

export const Initial_State: IState = { data: 'Default Value' };
export const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_DATA':
      return { data: payload };
    case 'RESET_DATA':
      return Initial_State;
    case 'CLEAN_DATA':
      return { data: '' };
    default:
      //throw new Error(`No case for type ${type} found in reducer.`);
      return state;
  }
};