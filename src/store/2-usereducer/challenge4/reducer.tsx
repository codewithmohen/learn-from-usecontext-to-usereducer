export interface IState {
  dataChallenge4: string;
}
export enum ActionType {
  SET_STATE = 'SET_STATE',
  RESET_DATA = 'RESET_DATA',
  CLEAN_DATA = 'CLEAN_DATA'
}
export interface IAction {
  type: ActionType;
  payload: string;
}
export const Initial_State: IState = { dataChallenge4: 'Default Value' };
export const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_STATE':
      return { dataChallenge4: payload }
    case 'RESET_DATA':
      return Initial_State
    case 'CLEAN_DATA':
      return { dataChallenge4: '' }
    default:
      //throw new Error(`No case for type ${type} found in reducer.`);
      return state
  }
}