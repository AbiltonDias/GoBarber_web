import { createContext } from 'react';
import { string } from 'yup';

interface AuthContextDate(){
    name:string;
}

const authContext = createContext<AuthContextDate>({} as AuthContextDate);

export default authContext;
