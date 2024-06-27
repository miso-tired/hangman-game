// Imports
import React, { ReactNode } from 'react';

interface DefProps {
    children: ReactNode;
}

const Def: React.FC<DefProps> = ({ children }) => {
    return (
        <>
                <nav>
                    <ul>
                        <li>
                            <a href='/game'>Play Now</a>
                        </li>
                        <li>
                            <a href='/login'>Login</a>
                        </li>
                        <li>
                            <a href='/register'>Register</a>
                        </li>
                    </ul>
                </nav>
                {children}
        </>
    );
};

export default Def;
