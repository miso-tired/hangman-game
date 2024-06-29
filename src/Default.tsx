// Imports
import React, { ReactNode } from 'react';

interface DefProps {
    children: ReactNode;
}

const Def: React.FC<DefProps> = ({ children }) => {
    return (
        <>
       {children}
        </>
    );
};

export default Def;
