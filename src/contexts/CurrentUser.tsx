import { createContext, ReactNode, useState } from "react";

interface CurrentUserContextType {
    currentUser: any; // Replace 'any' with the actual type of currentUser
    setCurrentUser: React.Dispatch<React.SetStateAction<any>> | ((user: any) => void); // Replace 'any' with the actual type of currentUser
}

export const CurrentUser = createContext<CurrentUserContextType | undefined>(undefined);

interface CurrentUserProviderProps {
    children: ReactNode;
}

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
    const [currentUser, setCurrentUser] = useState<any>(null); // Replace 'any' with the actual type of currentUser

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    );
}
