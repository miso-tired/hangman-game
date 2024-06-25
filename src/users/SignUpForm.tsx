// Imports 
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function SignUpForm() {
    
    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
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
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id="firstName" 
                    value={user.firstName} 
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })} 
                    placeholder="First Name" 
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    id="lastName" 
                    value={user.lastName} 
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })} 
                    placeholder="Last Name" 
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={user.email} 
                    onChange={(e) => setUser({ ...user, email: e.target.value })} 
                    placeholder="Email" 
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