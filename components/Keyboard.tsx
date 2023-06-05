import React, { Dispatch, SetStateAction } from "react";
import Key from "./Key";
import { keys } from "@/contants/keyboardKeys";

interface Props {
  game: boolean;
  tries: number | null;
  setTries: Dispatch<SetStateAction<number | null>>;
}
const Keyboard: React.FC<Props> = ({ game, setTries, tries }) => {
  return (
    <div className="px-4 py-6 flex flex-wrap items-center justify-center gap-2 mx-auto">
      {keys.map((key) => {
        return (
          <Key
            label={key}
            key={key}
            value={key}
            game={game}
            tries={tries}
            setTries={setTries}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
