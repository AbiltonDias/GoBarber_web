import React, { createContext, useCallback } from 'react';
import { string } from 'yup';
import api from '../services/api';

interface SignInCredentials{
    email: string;
    password: string;
}

interface AuthContextDate{
    name:string;
    signIn(credentials: SignInCredentials): Promise<void>;
}
const AuthContext = createContext<AuthContextDate>(
    {} as AuthContextDate
);

const AuthProvider: React.FC = ({children}) => {
    const signIn = useCallback(async ({email, password}) => {
        const response = await api.post('sessions', {
            email,
            password
        });

        console.log(response.data);
    }, []);

    return(
        <AuthContext.Provider value={{name: "Abilton", signIn}}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider}
