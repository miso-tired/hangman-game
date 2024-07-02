import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

interface User {
  username: string;
  password: string;
}

interface CurrentUserContextType {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

export const CurrentUser = createContext<CurrentUserContextType | undefined>(undefined);

interface CurrentUserProviderProps {
  children: ReactNode;
}

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}
