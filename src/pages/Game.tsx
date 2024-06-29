// Imports
import { useCallback, useEffect, useState } from "react";
import wordList from '../list.json';
import '../styles/game.css'
import { GallowsAndFigure } from "../components/GallowsAndFigure";
import { Word } from "../components/Word";
import { Keys } from "../components/Keys";

export function Game () {
    // list words from list.json
  const words = wordList.words;

  // make array
  const [guessWord] = useState(() => {
    // randomize word picked from word array
    return words[Math.floor(Math.random() * words.length)];
  });

  // for letters that have been used 
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const wrongLetters = usedLetters.filter(letter => !guessWord.includes(letter))

  const intro = "What word is it?"
  const loss = wrongLetters.length >= 6
  const win = guessWord.split("").every(letter => usedLetters.includes(letter))

  const addUsedLetter = useCallback((letter: string) => {
    if (usedLetters.includes(letter) || win || loss) return

    setUsedLetters(currentLetters => [...currentLetters, letter])
  }, [usedLetters, win, loss])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addUsedLetter(key)
    }
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [usedLetters])
  
  return (
    <div className="gamebox">
      <div className="status">
        {!win && !loss && intro}
        {win && "You Win! Refresh for a new game."}
        {loss && "Do Better. Refresh for a new game."}
      </div>
      <GallowsAndFigure guessAmount={wrongLetters.length} />
      <Word 
      reveal={loss}
      usedLetters={usedLetters} 
      guessWord={guessWord} />
      <Keys 
      disabled={win || loss}
      activeLetters={usedLetters.filter(letter => guessWord.includes(letter))} 
      inactiveLetters={usedLetters} 
      addUsedLetter={addUsedLetter} />
    </div>
  )
}