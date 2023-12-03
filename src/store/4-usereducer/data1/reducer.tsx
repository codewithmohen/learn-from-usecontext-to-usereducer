export interface State {
  data1: string;
}
export const InitialState = { data1: 'Default Value' };

export interface Action {
  type: 'SET_STATE' | 'RESET_DATA' | 'CLEAN_DATA';
  payload: State;
}


const reducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_STATE':
      return { ...state, data1: payload }
    case 'RESET_DATA':
      return { ...state, data1: InitialState }
    case 'CLEAN_DATA':
      return { ...state, data1: '' }
    default:
      throw new Error(`No case for type ${type} found in reducer.`);
  }

}
export default reducer;