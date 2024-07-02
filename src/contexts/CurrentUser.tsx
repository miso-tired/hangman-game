import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CurrentUserContextType {
  currentUser: { id: number; name: string; username: string; wins: number; losses: number } | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}

interface CurrentUserProviderProps {
  children: ReactNode;
}

const CurrentUserContext = createContext<CurrentUserContextType | undefined>(undefined);

export const CurrentUserProvider: React.FC<CurrentUserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserContextType['currentUser']>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }
  return context;
};