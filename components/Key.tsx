import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useContext } from "react";
import {
  UsedLetterContext,
  IUsedLetterState,
} from "@/contexts/usedLetter.context";
import { ISecretWord, SecretWordContext } from "@/contexts/secretWord.context";
import {
  HangmanContext,
  IHangmanContext,
} from "@/contexts/hangmanState.context";

interface Props {
  label: string;
  value: string;
  game: boolean;
  tries: number | null;
  setTries: Dispatch<SetStateAction<number | null>>;
}

const Key: React.FC<Props> = ({ label, value, game, tries, setTries }) => {
  const { usedLetter, setUsedLetter } =
    useContext<IUsedLetterState>(UsedLetterContext);
  const { hangmanState, setHangmanState } =
    useContext<IHangmanContext>(HangmanContext);
  const { secretWord } = useContext<ISecretWord>(SecretWordContext);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isUsed, setIsUsed] = useState<boolean>(false);

  useEffect(() => {
    if (game === false) {
      setIsCorrect(false);
      setIsUsed(false);
    }
  }, [game]);

  const handleKeyButton = (value: string) => {
    if (!isUsed) {
      setUsedLetter(usedLetter.concat(value));
      setIsUsed(true);
      const correct = findIfIsCorrect(value);
      setIsCorrect(correct);
      console.log(usedLetter);
      if (!correct && tries !== null) {
        setTries(tries - 1);
        const newState = hangmanState + 1;
        setHangmanState(newState);
      }
    }
  };

  const findIfIsCorrect = (value: string) => {
    const isCorrectOrNot = secretWord.some((letter) => letter === value);
    return isCorrectOrNot;
  };

  return (
    <button
      onClick={() => handleKeyButton(value)}
      disabled={isUsed || game === false}
      className={`h-12 w-8 ${
        isUsed
          ? isCorrect
            ? "bg-correct text-dark"
            : "bg-incorrect text-dark"
          : "bg-light text-dark"
      } rounded hover:brightness-90 transition duration-150`}
    >
      <span>{label}</span>
    </button>
  );
};

export default Key;
