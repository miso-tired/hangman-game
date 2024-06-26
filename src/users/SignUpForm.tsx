// Imports 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function SignUpForm() {
    
    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        username: '',
        password: ''
    })

    // Form submission logic
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Go to hangman game after sign up
        navigate('/game')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    value={user.name} 
                    onChange={(e) => setUser({ ...user, name: e.target.value })} 
                    placeholder="Name" 
                />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    value={user.username} 
                    onChange={(e) => setUser({ ...user, username: e.target.value })} 
                    placeholder="Username" 
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={user.password} 
                    onChange={(e) => setUser({ ...user, password: e.target.value })} 
                    placeholder="Password" 
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm