import React, {createContext, useEffect, useState} from 'react';
import {API_PATH} from "../../api-path";
import {StandardFetcher} from "../Services/Fetcher/StandardFetcher";
import * as SecureStore from "expo-secure-store";
import jwt from 'jsonwebtoken'
export const AuthContext = React.createContext({
    isLoading:true,
    token:'',
    splashLoading:false,
    idUser:"",
    register:(infos:{})=>{},
    login:(email:string, password:string)=>{},
    logout:()=>{},
    
});
const BASE_PATH = API_PATH;
export const AuthProvider = ({children}:any) => {
    const [token, setToken] = useState('');
    const [idUser, setidUser] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = async  (infos:{}) => {
      try {

      setIsLoading(true);
        const res = await  fetch(`${BASE_PATH}/auth/register/client`,
            {
                method: 'POST',
                body: JSON.stringify({...infos})
            })
          const parsed = await res.json();
        console.log("eeeeeeeeeeeeeeeeeeeeeee",res)

                let token = parsed?.token;
                if (token) setToken(token);
                else throw new Error('token not found');
                await SecureStore.setItemAsync('token', token);
                setIsLoading(false);
                console.log(token); } 
            catch(e){
                console.log(`register error ${e}`);
                setIsLoading(false);
            };
    };

    const login = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_PATH}/auth/login`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },

                method: 'POST',
                body: JSON.stringify({email, password})
            })

            const parsed = await res.json();
            console.log(parsed)
            let token = parsed.data.jwt;
            if (token) {
                setToken(token);
                setidUser(parsed.data.id)
                console.log('my id',parsed)
            } 
        
            else throw new Error('token not found');
            await SecureStore.setItemAsync('token', token);
            setIsLoading(false);

        } catch (e) {
            console.log(`login error ${e}`);
            setIsLoading(false);
        }
        ;
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
                idUser,
                register,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};