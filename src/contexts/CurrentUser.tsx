import { createContext, ReactNode, useState } from "react";

interface CurrentUserContextType {
    currentUser: any; 
    setCurrentUser: React.Dispatch<React.SetStateAction<any>> | ((user: any) => void); 
}

export const CurrentUser = createContext<CurrentUserContextType | undefined>(undefined);

interface CurrentUserProviderProps {
    children: ReactNode;
}

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
    const [currentUser, setCurrentUser] = useState<any>(null); 

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    );
}
