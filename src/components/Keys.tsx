import React, { useState } from 'react';
import '../styles/game.css';

const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];

export function Keys() {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    const handleClick = (key: string) => {
        setActiveKey(key);
    };

    return (
        <div className='keyboard'>
            {KEYS.map(key => {
                const isActive = activeKey === key;
                return (
                    <button
                        key={key}
                        className={`keyButton ${isActive ? 'active' : 'inactive'}`}
                        style={{ 
                            border: '2px solid black', 
                            fontWeight: 'bold', 
                            fontSize: '3em', 
                            textTransform: 'uppercase', 
                            cursor: 'pointer' 
                        }}
                        onClick={() => handleClick(key)}
                        disabled={!isActive}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
}
