// Make body parts variables. Should allow body parts to render, based on guesses.
const head = <div className="da-head"></div>;

const body = <div className="da-body"></div>;

const rightArm = <div className="right-arm"></div>;

const leftArm = <div className="left-arm"></div>;

const rightLeg = <div className="right-leg"></div>;

const leftLeg = <div className="left-leg"></div>;

type GallowsAndFigureProps = {
  guessAmount: number;
};

const whole_body = [head, body, rightArm, leftArm, rightLeg, leftLeg];

// Make Gallows for the gameboard.
export function GallowsAndFigure({ guessAmount }: GallowsAndFigureProps) {
  return (
    <div className="gallows-container">
      {whole_body.slice(0, guessAmount)}
      <div className="the-gallows">
        <div className="hanging-bar"></div>
        <div className="top-bar"></div>
        <div className="vert-bar"></div>
        <div className="gallows-base"></div>
      </div>
    </div>
  );
}
