import { useState, useEffect } from 'react';
import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
                .then(result => {
                    console.log(result.user);
                    setUser(result.user);
                })
                .finally(() => setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
    }

    const registerNewUser = (email, password,name) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            setUserName(name);
          })
          .catch(error => {
            setError(error.message);
          })
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }else{
                setUser({})
            }
            setIsLoading(false);
        });
        return unsubscribe;
    }, [])

    return {
        user,
        isLoading,
        error,
        signInUsingGoogle,
        logout,
        processLogin,
        registerNewUser
    }
}

export default useFirebase;