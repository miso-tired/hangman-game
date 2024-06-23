// Display guessing word
export function Word () {
    // Hard code word for now to test
    const word = "test"

    return (
        <div className="word">
            {word.split("")}
        </div>
    )
}