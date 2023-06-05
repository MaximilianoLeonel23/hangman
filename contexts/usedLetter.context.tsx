"use client";

import { ReactNode, createContext, useState } from "react";

export interface IUsedLetterState {
  usedLetter: string[];
  setUsedLetter: React.Dispatch<React.SetStateAction<string[]>>;
}

export const UsedLetterContext = createContext<IUsedLetterState>({
  usedLetter: [],
  setUsedLetter: () => {},
});

interface Props {
  children: ReactNode;
}
export const UsedLetterContextProvider: React.FC<Props> = ({ children }) => {
  const [usedLetter, setUsedLetter] = useState<string[]>([]);

  const value: IUsedLetterState = {
    usedLetter,
    setUsedLetter,
  };
  return (
    <UsedLetterContext.Provider value={value}>
      {children}
    </UsedLetterContext.Provider>
  );
};
