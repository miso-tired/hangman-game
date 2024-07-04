// Imports
import React, { useEffect, useState } from 'react';
import Def from './Default';
import '../src/styles/home.css'

const Home: React.FC = () => {
    
    const [matches, setMatches] = useState()

    useEffect(() => {

        const fetchMatches = async () => {
            const response = await fetch('/api/users/matches/1')
            const json = await response.json()

            if (matches) {
                setMatches(json)
            }
        }

        fetchMatches()
    }, [])

    return (
        <Def>
            <div className="landing-container">
                <h1>Hang the Man.</h1>
                <h2>If you don't figure out the word in six guesses.</h2>
                <p>(Save him. He is innocent.)</p>
            </div>
        </Def>
    );
};

export default Home;