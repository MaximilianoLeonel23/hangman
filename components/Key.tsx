import React, { Dispatch, SetStateAction, useState } from "react";
import { useContext } from "react";
import { HangmanContext, IUsedLetterState } from "@/contexts/hangman.context";
import { ISecretWord, SecretWordContext } from "@/contexts/secretWord.context";

interface Props {
  label: string;
  value: string;
  game: boolean;
  tries: number | null;
  setTries: Dispatch<SetStateAction<number | null>>;
}

const Key: React.FC<Props> = ({ label, value, game, tries, setTries }) => {
  const { usedLetter, setUsedLetter } =
    useContext<IUsedLetterState>(HangmanContext);

  const { secretWord } = useContext<ISecretWord>(SecretWordContext);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isUsed, setIsUsed] = useState<boolean>(false);

  const handleKeyButton = (value: string) => {
    if (!isUsed) {
      setUsedLetter([...usedLetter, value]);
      setIsUsed(true);
      setIsCorrect(findIfIsCorrect());
    }

    if (isCorrect) {
      setTries(tries);
    } else {
      if (tries === null) {
        setTries(tries);
      } else {
        setTries(tries - 1);
      }
    }
  };

  const findIfIsCorrect = () => {
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
