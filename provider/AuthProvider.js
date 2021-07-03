import React, { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState("");
    const [username, setUsername] = useState("");

    return (
        <AuthContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            username, setUsername,
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;