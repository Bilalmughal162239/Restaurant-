import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../Config/firebase'

const AuthContext = createContext()
const initialState = { isAuth: false, user: {} }
const AuthProvider = ({ children }) => {
    const [state, setState] = useState(initialState)
    const [isAppLoading , setIsAppLoading]=useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setState({ ...state, isAuth: true, user })
                // console.log('user', user)
            } else {
                console.log('User is logout')
            }
            setIsAppLoading(false)
        })
    }, [state])
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setState(initialState)
                window.notify("User Successfully Logout", 'success')
            })
            .catch(error => {
                window.notify("Some Thing Went Wrong To Logout User", 'error')
                console.error(error)
            })
    }
    return (
        <>
            <AuthContext.Provider value={{ ...state, setAuthState: setState, isAppLoading,handleLogout }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider