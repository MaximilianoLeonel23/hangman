import React, { useState, useContext, useEffect } from "react";
import {
  UsedLetterContext,
  IUsedLetterState,
} from "@/contexts/usedLetter.context";

interface Props {
  label: string;
}

const Letter: React.FC<Props> = ({ label }) => {
  const { usedLetter } = useContext<IUsedLetterState>(UsedLetterContext);
  const [isInTheWord, setIsInTheWord] = useState<boolean>(false);

  useEffect(() => {
    setIsInTheWord(usedLetter.includes(label));
  }, [usedLetter, label]);

  return (
    <div className="flex items-center justify-center border-b border-light w-8 h-8 text-light">
      {isInTheWord && <span>{label}</span>}
    </div>
  );
};

export default Letter;
