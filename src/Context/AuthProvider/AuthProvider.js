import React, { createContext } from 'react';
import { app } from '../../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    


    const info = {

    }


    return (
        <AuthContext.Provider value={info}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;