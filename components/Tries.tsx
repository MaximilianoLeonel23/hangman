import React from "react";

interface Props {
  game: boolean;
  tries: number | null;
}
const Tries: React.FC<Props> = ({ game, tries }) => {
  return game ? (
    <p className="text-dark text-sm px-4 py-2 border border-dark rounded w-fit">
      Intentos: <span>{tries ?? ""}</span>
    </p>
  ) : null;
};

export default Tries;
