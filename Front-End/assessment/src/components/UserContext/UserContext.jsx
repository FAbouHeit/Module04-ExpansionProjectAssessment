import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
  };  


export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({});
    
    const signin = (info) =>{
        setUser(info);
    }
    const signout = () =>{
        setUser({});
    }

    return (
        <UserContext.Provider value={{ user, signin,signout}}>
            {children}
        </UserContext.Provider>
    );
};


