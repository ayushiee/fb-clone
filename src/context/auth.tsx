import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { auth, provider } from '../utils/firebase';
import firebase from 'firebase';

interface AuthContextProps {
  children?: JSX.Element;
}

interface AuthContext {
  signin: () => Promise<firebase.auth.UserCredential>;
  currentUser: firebase.User | null;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export function useAuth(): AuthContext {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthContextProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(() => auth.currentUser);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const signin = async ():Promise<firebase.auth.UserCredential> => {
    return auth.signInWithPopup(provider)
  };

  const logout = async (): Promise<void> => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: firebase.User | null) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: AuthContext = { currentUser, logout, isAuthenticated, signin };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
