import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../../api";


export const AuthContext = createContext(false);

export function AuthProvider({children}){

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUserName] = useState("")
    
    const handleAuth = () => {
        const token = localStorage.getItem("access")
        if(token) {
            const decode = jwtDecode(token)
            const expiry_date = decode.exp
            const  current_time = Date.now() / 1000
            if(expiry_date >= current_time){
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
            }
        }
    }

    function getUserName(){
        api.get("get_user")
        .then(res => {
            setUserName(res.data.username)
        })
        .catch(err => {
            console.error(err.message)
        })
    }
    useEffect(function() {
        handleAuth()
        getUserName()


    },[])

    const authValue = { isAuthenticated, setIsAuthenticated, getUserName, username}

    return <AuthContext.Provider value={authValue}>
        {children}
        </AuthContext.Provider>
}