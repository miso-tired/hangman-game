import React, { useState } from 'react';
import '../styles/game.css';

const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];

type KeyProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addUsedLetter: (letter: string) => void
    disabled?: boolean
}

export function Keys({ activeLetters, inactiveLetters, addUsedLetter, disabled = false }: KeyProps) {
    
    return (
        <div className='keyboard'>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        onClick={() => addUsedLetter(key)}
                        key={key}
                        className={`keyButton ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
                        disabled={isInactive || isActive || disabled}
                        style={{ 
                            border: '2px solid black', 
                            fontWeight: 'bold', 
                            fontSize: '3em', 
                            textTransform: 'uppercase', 
                            cursor: 'pointer' 
                        }}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
}
