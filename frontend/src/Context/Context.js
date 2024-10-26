import React, { createContext, useState } from "react";

export const DataContext = createContext(null)

function Context({ children }) {
    const [userData, setUserData] = useState({});
    const [isLogin, setIsLogin] = useState(false);

    return (
        <DataContext.Provider
            value={{
                userData,
                setUserData,
                isLogin,
                setIsLogin
            }}
        >

            {children}
        </DataContext.Provider>
    )
}

export default Context