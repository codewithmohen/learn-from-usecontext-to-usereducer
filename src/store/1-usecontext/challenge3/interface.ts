export interface IContext {
	data: string;
	setData: React.Dispatch<React.SetStateAction<string>>;
	setData2: (input: string) => void;
	setData3: (input: string) => void;
	clearData: () => void;
	resetData: () => void;
}
