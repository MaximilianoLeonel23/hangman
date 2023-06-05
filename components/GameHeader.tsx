import React from "react";
import DeadIcon from "../components/DeadIcon";
import Logo from "./Logo";
interface Props {
  game: boolean;
  startGame: () => void;
  matchLabel: string;
  handleDifficulty: () => void;
  difficulty: number;
}
const GameHeader: React.FC<Props> = ({
  game,
  startGame,
  matchLabel,
  handleDifficulty,
  difficulty,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center gap-x-2">
        <Logo />
        <h1 className="text-dark font-semibold text-xl sm:text-3xl">
          Ahorcado
        </h1>
      </div>
      <p className="text-dark font-light text-sm">
        ¡Adivina la palabra antes de ser ahorcado!
      </p>
      {!game && (
        <div className="flex flex-wrap gap-4">
          <button
            onClick={startGame}
            className="bg-dark px-4 w-fit py-2 border border-dark rounded text-light text-sm text-left"
          >
            {matchLabel}
          </button>
          <button
            onClick={handleDifficulty}
            className="flex items-center gap-x-1 bg-none px-4 w-fit py-2 border border-dark rounded text-dark text-sm"
          >
            Dificultad:{" "}
            <span className="flex gap-x-1 items-center">
              {Array.from({ length: difficulty }).map((e, index) => (
                <DeadIcon key={index} />
              ))}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default GameHeader;
