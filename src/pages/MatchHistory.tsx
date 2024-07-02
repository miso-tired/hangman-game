import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/home.css';

const MatchesPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userStats, setUserStats] = useState<{ wins: number, losses: number } | null>(null);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/users/matches/${userId}`);
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
  }, [userId]);

  if (!userStats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="landing-container">
      <h1>Matches Page</h1>
      <h2>User Stats for User ID: {userId}</h2>
      <div>
        <p>Wins: {userStats.wins}</p>
        <p>Losses: {userStats.losses}</p>
      </div>
    </div>
  );
};

export default MatchesPage;