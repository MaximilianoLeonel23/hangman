import { HangmanContext, IUsedLetterState } from "@/contexts/hangman.context";
import { useContext, useEffect } from "react";
import React, { useState } from "react";
interface Props {
  label: string;
}
const Letter: React.FC<Props> = ({ label }) => {
  const { usedLetter } = useContext<IUsedLetterState>(HangmanContext);

  const [isInTheWord, setIsInTheWord] = useState<boolean>(false);

  useEffect(() => {
    const isThere: boolean = usedLetter.some((letter) => letter === label);
    if (isThere) setIsInTheWord(true);
  }, [usedLetter]);
  return (
    <div className="flex items-center justify-center border-b border-light w-8 h-8 text-light">
      <span className={isInTheWord ? "block" : "hidden"}>{label}</span>
    </div>
  );
};

export default Letter;
