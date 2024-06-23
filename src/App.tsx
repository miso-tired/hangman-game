// Imports
import { useState } from "react";
import wordList from './list.json';
import '../src/styles/game.css'
import { GallowsAndFigure } from "./components/GallowsAndFigure";


function App() {
  const words = wordList.words;


  const [guessWord, setGuessWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });


  const [usedLetters, setUsedLetters] = useState([]);


  console.log(guessWord);
  return (
    <div className="gamebox">
      <div className="status">
        You Win! Do Better.
      </div>
      <GallowsAndFigure />
    </div>
  )
}

export default App