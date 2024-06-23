// Imports
import { useState } from "react";
import wordList from './list.json';
import '../src/styles/game.css'
import { GallowsAndFigure } from "./components/GallowsAndFigure";
import { Word } from "./components/Word";


function App() {
  // list words from list.json
  const words = wordList.words;

  // make array
  const [guessWord, setGuessWord] = useState(() => {
    // randomize word picked from word array
    return words[Math.floor(Math.random() * words.length)];
  });

  // for letters that have been used 
  const [usedLetters, setUsedLetters] = useState([]);

  // Check if random word generates
  console.log(guessWord);

  
  return (
    <div className="gamebox">
      <div className="status">
        You Win! Do Better.
      </div>
      <GallowsAndFigure />
      <Word />
    </div>
  )
}

export default App