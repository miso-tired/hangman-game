import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/home.css';

const MatchesPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userMatches, setUserMatches] = useState<any[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/matches/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }
        const data = await response.json();
        setUserMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, [userId]);

  return (
    <div className="landing-container">
      <h1>Matches Page</h1>
      <h2>User Matches for User ID: {userId}</h2>
      <div>
        {userMatches.map((match: any) => (
          <div key={match.id}>
            <p>Match ID: {match.id}</p>
            <p>Result: {match.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;
