import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false)

    const logout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        setUserEmail('');
        setToken('');
    }

    useEffect(() => {
        setToken(localStorage.getItem('accessToken'))
    }, [userEmail])

    useEffect(() => {
        const url = `https://techs-n-pages.onrender.com/api/v1/user/currentUser`;
        if (token) {
            setLoading(true)
            fetch(url, {
                method: "GET",
                headers: {
                  "content-type": "application/json",
                  authorization: `Bearer ${token}`,
                },
              }).then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setUser(data.data);
                    }
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false);
                    setUser();
                })
        }
    }, [token])

    const authInfo = {
        user,
        setUser,
        setUserEmail,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}