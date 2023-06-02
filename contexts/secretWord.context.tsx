"use client";

import { ReactNode, createContext, useState } from "react";

export interface ISecretWord {
  secretWord: string[];
  setSecretWord: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SecretWordContext = createContext<ISecretWord>({
  secretWord: [],
  setSecretWord: () => {},
});

interface Props {
  children: ReactNode;
}
export const SecretWordContextProvider: React.FC<Props> = ({ children }) => {
  const [secretWord, setSecretWord] = useState<string[]>([]);

  const value: ISecretWord = {
    secretWord,
    setSecretWord,
  };
  return (
    <SecretWordContext.Provider value={value}>
      {children}
    </SecretWordContext.Provider>
  );
};
