import {createContext} from 'react';

export type AuthContextType = {
    token:string;
    setToken: (token:string) => void;

    handleLogin: (email: string, password: string) => Promise<string>;
    handleLogout: () => void;
    
    IsLogged: ({children}:{ children: JSX.Element }) => JSX.Element;
    IsAuthenticated: ({children}:{ children: JSX.Element }) => JSX.Element;
}

export const AuthContext = createContext<AuthContextType>(null!);