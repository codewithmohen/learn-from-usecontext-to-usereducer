import { createContext } from 'react';
import { IContext } from './interface';

export const defaultDataValue = 'Default Value';
const Initialize: IContext = {
	data: '',
	setData: () => {},
	setData2: () => {},
	setData3: () => {},
	clearData: () => {},
	resetData: () => {},
};

export const DataContext = createContext<IContext>(Initialize);
