import {createContext, PropsWithChildren} from 'react';

export interface IAppContext {
	default : null
}

export const AppContext = createContext<IAppContext>({default : null});

export const AppContextProvider = ({ children }: PropsWithChildren<IAppContext>): JSX.Element => {
	return <AppContext.Provider value={{default: null }}>
		{children}
	</AppContext.Provider>;
};