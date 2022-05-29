import React, {createContext, useEffect, useState} from 'react';
import {API_PATH} from "../../api-path";
import {StandardFetcher} from "../Services/Fetcher/StandardFetcher";
import * as SecureStore from "expo-secure-store";


export const AuthContext = React.createContext({
    isLoading:true,
    token:'',
    splashLoading:false,
    register:(name: string, email: string, password: string)=>{},
    login:(email:string, password:string)=>{},
    logout:()=>{},
});
const BASE_PATH = API_PATH;
export const AuthProvider = ({children}:any) => {
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = (name: string, email: string, password: string) => {
        setIsLoading(true);
         fetch(`${BASE_PATH}/auth/register`,
            {
                method: 'POST',
                body: JSON.stringify({name, email, password})
            })
            .then(res => res.json())
            .then(async res => {
                let token = res.data?.token;
                setToken(token);
                await SecureStore.setItemAsync('token', token);
                setIsLoading(false);
                console.log(token);
            })
            .catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false);
            });
    };

    const login = (email:string, password:string) => {
        setIsLoading(true);
         fetch(`${BASE_PATH}/auth/login`,{
                headers: {
                        Accept: 'application/json',
                         'Content-Type': 'application/json' },

                method: 'POST',
                body: JSON.stringify({email,password})
            })
                .then(res => res.json())
                .then(async (res) => {
                let token = res.jwt;
                    setToken(token);
                await SecureStore.setItemAsync('token', token);
                setIsLoading(false);
        
            })
            .catch(e => {
                console.log(`login error ${e}`);
                setIsLoading(false);
            });
    };

    const logout = () => {
        setIsLoading(true);
        StandardFetcher
            .fetch(`${BASE_PATH}/logout`,{
                method: 'POST'
            })
            .then(async res => {
                console.log(res.data);
                await SecureStore.deleteItemAsync('token');
                setToken('');
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`logout error ${e}`);
                setIsLoading(false);
            });
    };

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true);

            let token = await SecureStore.getItemAsync('token');
            if (token){
                setToken(token);
            }
            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect( () => {
         isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                token,
                splashLoading,
                register,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};