import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { loginReq } from "./App";

  export interface AuthContextType {
    credentials: loginReq;
    setCredentials: Dispatch<SetStateAction<loginReq>>;
  }

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() : AuthContextType {
    const creds = useContext(AuthContext)
    if(creds === undefined){
        throw Error("Context issue")
    }
    return creds
}