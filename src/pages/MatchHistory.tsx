import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/home.css';

const MatchesPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userStats, setUserStats] = useState<{ wins: number, losses: number } | null>(null);

  const apiUrl = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api';

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch(`${apiUrl}/users/matches/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user stats');
        }
        const data = await response.json();
        setUserStats(data);
      } catch (error) {
        console.error('Error fetching user stats:', error);
      }
    };

    fetchUserStats();
  }, [userId, apiUrl]);

  if (!userStats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="landing-container">
      <h1>Your Wins and Losses</h1>
      <div>
        <h2>Wins: {userStats.wins}</h2>
        <h2>Losses: {userStats.losses}</h2>
      </div>
    </div>
  );
};

export default MatchesPage;
