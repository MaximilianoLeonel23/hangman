import React from "react";
import { useContext } from "react";
import { HangmanContext, IUsedLetterState } from "@/contexts/hangman.context";

interface Props {
  label: string;
  value: string;
}
const Key: React.FC<Props> = ({ label, value }) => {
  const { usedLetter, setUsedLetter } =
    useContext<IUsedLetterState>(HangmanContext);

  const handleKeyButton = (value: string) => {
    setUsedLetter([...usedLetter, value]);
    console.log(usedLetter);
  };

  return (
    <button
      onClick={() => handleKeyButton(value)}
      className="h-12 w-8 bg-light text-dark rounded hover:brightness-90 transition duration-150"
    >
      <span>{label}</span>
    </button>
  );
};

export default Key;
