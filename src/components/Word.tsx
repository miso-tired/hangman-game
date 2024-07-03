type WordProps = {
  usedLetters: string[];
  guessWord: string;
  reveal?: boolean;
};

// Display guessing word
export function Word({ usedLetters, guessWord, reveal = false }: WordProps) {
  return (
    <div className="word">
      {guessWord.split("").map((letter, index) => (
        // Need to display border-bottom, but not the guessing word
        // Using index as key because each index in the guessing word is a unique value needed for the visibility of the word to work (i.e. two letters in the same word would not show up)
        <span className="word-underline" key={index}>
          <span
            style={{
              visibility:
                usedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color:
                !usedLetters.includes(letter) && reveal ? "#9e2a2b" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
