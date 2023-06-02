"use client";

import { ReactNode, createContext, useState } from "react";

export interface IUsedLetterState {
  usedLetter: string[];
  setUsedLetter: React.Dispatch<React.SetStateAction<string[]>>;
}

export const HangmanContext = createContext<IUsedLetterState>({
  usedLetter: [],
  setUsedLetter: () => {},
});

interface Props {
  children: ReactNode;
}
export const HangmanContextProvider: React.FC<Props> = ({ children }) => {
  const [usedLetter, setUsedLetter] = useState<string[]>([]);

  const value: IUsedLetterState = {
    usedLetter,
    setUsedLetter,
  };
  return (
    <HangmanContext.Provider value={value}>{children}</HangmanContext.Provider>
  );
};
