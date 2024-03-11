import { createContext } from 'react';
import { IContext } from './interface';

const Initialize: IContext = {
	data: '',
	setData: () => {},
};

export const DataContext = createContext<IContext>(Initialize);
