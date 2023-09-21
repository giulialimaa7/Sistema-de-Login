import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Login } from "../../pages/login";
import { Private } from "../../pages/private";

import { api } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }:{ children: JSX.Element }) => {

    const navigate = useNavigate();
    const [token, setToken] = useState('');
    
    const validateToken = async () => {
        const storageData = localStorage.getItem('authToken'); 

        if (storageData) {
            const data = await api.validateToken(storageData);

            if (data.isValid){
                setToken(storageData);
            }
        }
    }

    useEffect( () => { 
        validateToken() 

    }, [] )

    const handleLogin = async (email:string, password:string) => {
        const data = await api.loginUser(email, password);

        if (data.token) {
            setToken(data.token);

            localStorage.setItem('authToken', data.token);
            return data;
        }
        else {
            return alert("Email ou senha incorretos!");
        }     
    }

    const handleLogout = async () => {
        setToken('')
        localStorage.removeItem('authToken')

        navigate('/')
    }

    const IsLogged = () => {
        if (!token) {
            return <Login />
        }
        navigate('/private')
        return <Private />
    }

    const IsAuthenticated = ({children}:{ children: JSX.Element }) => {
        if (!token) {
            return <Login />
        }
        return children;
    }

    return (
        <AuthContext.Provider value={ { handleLogin, handleLogout, token, setToken, IsLogged, IsAuthenticated } } > { children } </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);