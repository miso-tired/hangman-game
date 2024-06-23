// Display guessing word
export function Word () {
    // Hard code word for now to test
    const word = "otherwise"
    const usedLetters = ["t", "e", "g"]

    return (
        <div className="word">
            {word.split("").map((letter, index) => (
                // Need to display border-bottom, but not the guessing word
                // Using index as key because each index in the guessing word is a unique value needed for the visibility of the word to work (i.e. two letters in the same word would not show up)
                <span className="word-underline" key={index}>
                    <span style={{ visibility: usedLetters.includes(letter) ? "visible" : "hidden"}}>{letter}</span>
                </span>
            ))}
        </div>
    )
}