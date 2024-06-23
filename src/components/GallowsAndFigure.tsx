// Make body parts variables. Should allow body parts to render, based on guesses.
const head = (
    <div className="da-head"></div>
)

// Make Gallows for the gameboard.
export function GallowsAndFigure () {
    return (
        <div className="gallows-container">
            {head}
            <div className="the-gallows">
                <div className="hanging-bar"></div>
                <div className="top-bar"></div>
                <div className="vert-bar"></div>
                <div className="gallows-base"></div>
            </div>
        </div>
    )
}
