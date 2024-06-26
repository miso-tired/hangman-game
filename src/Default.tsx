// Imports
import React, { ReactNode } from 'react';

interface DefProps {
    children: ReactNode;
}

const Def: React.FC<DefProps> = ({ children }) => {
    return (
        <html>
            <head>
                <title>Hangman Game</title>
            </head>
            <body>
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
            </body>
        </html>
    );
};

export default Def;
