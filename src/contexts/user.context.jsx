import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

// Context to keep track of the current user

export const UserContext = createContext({
    // Default values
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    // Auth state listener. Toggles between the user object from Firebase and null.
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            // New user? Create a doc in Firebase
            if(user) {
            createUserDocumentFromAuth(user);
            }
            // Otherwise, set currentUser
            setCurrentUser(user);
        })
        // Stop listening when the component unmounts
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};