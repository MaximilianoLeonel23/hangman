import React, { useContext } from "react";
import Image from "next/image";
import { hangmanStates } from "@/contants/hangmanStates";
import {
  HangmanContext,
  IHangmanContext,
} from "@/contexts/hangmanState.context";
const HangmanImage: React.FC = () => {
  const { hangmanState } = useContext<IHangmanContext>(HangmanContext);
  return (
    <div className="w-1/2">
      <Image
        src={hangmanStates[hangmanState]}
        alt="hangman"
        className="mx-auto"
      />
    </div>
  );
};

export default HangmanImage;
