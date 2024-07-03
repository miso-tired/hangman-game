import { useCallback, useEffect, useState } from "react";
import wordList from '../list.json';
import '../styles/game.css'
import { GallowsAndFigure } from "../components/GallowsAndFigure";
import { Word } from "../components/Word";
import { Keys } from "../components/Keys";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUser";

export function Game() {
  const words = wordList.words;
  const [guessWord, setGuessWord] = useState(() => words[Math.floor(Math.random() * words.length)]);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  // Keep track of wins and losses
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const { currentUser } = useCurrentUser();

  const wrongLetters = usedLetters.filter(letter => !guessWord.includes(letter));
  const intro = "What word is it?";
  const isLoss = wrongLetters.length >= 6;
  const isWin = guessWord.split("").every(letter => usedLetters.includes(letter));

  const addUsedLetter = useCallback(
    (letter: string) => {
      if (usedLetters.includes(letter) || isWin || isLoss) return;
      setUsedLetters(currentLetters => [...currentLetters, letter]);
    },
    [usedLetters, isWin, isLoss]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addUsedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [usedLetters, addUsedLetter]);

  // Win and Loss record
  useEffect(() => {
    const updateWinLoss = async (type: 'wins' | 'losses') => {
      if (!currentUser) {
        console.log("No current user");
        return;
      }
    
      const endpoint = type === 'wins' ? 'update-wins' : 'update-losses';
      try {
        const response = await fetch(`http://localhost:3000/api/users/${endpoint}/${currentUser.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          const errorResponse = await response.json();
          console.error('Failed to update win/loss:', errorResponse);
        } else {
          console.log(`Successfully updated ${type}.`);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };

  if (isWin) {
    setWins(prevWins => prevWins + 1);
    updateWinLoss('wins');
  } else if (isLoss) {
    setLosses(prevLosses => prevLosses + 1);
    updateWinLoss('losses');
  }
}, [isWin, isLoss, currentUser]);

  // Reset game without refreshing page
  const resetGame = () => {
    setUsedLetters([]);
    const newWord = words[Math.floor(Math.random() * words.length)];
    setGuessWord(newWord);
  };

  return (
    <div className="gamebox">
      <div className="status">
        {!isWin && !isLoss && intro}
        {isWin && <div>You Win! Current Session Wins: {wins}</div>}
        {isLoss && <div>Do Better. Current Session Losses: {losses}</div>}
        <Link className="newGame" onClick={resetGame} to={""}>
          New Game
        </Link>
      </div>
      <GallowsAndFigure guessAmount={wrongLetters.length} />
      <Word reveal={isLoss} usedLetters={usedLetters} guessWord={guessWord} />
      <Keys disabled={isWin || isLoss} activeLetters={usedLetters.filter(letter => guessWord.includes(letter))} inactiveLetters={usedLetters} addUsedLetter={addUsedLetter} />
    </div>
  );
}