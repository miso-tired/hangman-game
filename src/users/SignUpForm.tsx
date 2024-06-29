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
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

        // Go to hangman game after sign up
        navigate('/game')
    } catch (error) {
        console.error({
            message: 'Something wrong with submission.'
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="name" 
                    id="name" 
                    value={user.name} 
                    onChange={(e) => setUser({ ...user, name: e.target.value })}  
                    required
                />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="lastName" 
                    value={user.username} 
                    onChange={(e) => setUser({ ...user, username: e.target.value })}  
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={user.password} 
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    required
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}
}

export default SignUpForm
