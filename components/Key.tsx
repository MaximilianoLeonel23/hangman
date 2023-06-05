import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
} from "react";
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
    if (!game) {
      setIsCorrect(false);
      setIsUsed(false);
    }
  }, [game]);

  const handleKeyButton = (value: string) => {
    if (!isUsed) {
      setUsedLetter((prev) => [...prev, value]);
      setIsUsed(true);
      const correct = findIfIsCorrect(value);
      setIsCorrect(correct);

      if (!correct && tries !== null) {
        setTries((prevTries) => (prevTries ?? 0) - 1);
        setHangmanState((prevHangmanState) => prevHangmanState + 1);
      }
    }
  };

  const findIfIsCorrect = (value: string) => {
    return secretWord.includes(value);
  };

  return (
    <button
      onClick={() => handleKeyButton(value)}
      disabled={isUsed || !game}
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
