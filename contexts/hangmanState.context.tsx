"use client";

import { ReactNode, createContext, useState } from "react";

// interface IHangman {
//   state: number;
// }

export interface IHangmanContext {
  hangmanState: number;
  setHangmanState: React.Dispatch<React.SetStateAction<number>>;
}

export const HangmanContext = createContext<IHangmanContext>({
  hangmanState: 0,
  setHangmanState: () => {},
});

interface Props {
  children: ReactNode;
}
export const HangmanContextProvider: React.FC<Props> = ({ children }) => {
  const [hangmanState, setHangmanState] = useState<number>(0);

  const value: IHangmanContext = {
    hangmanState,
    setHangmanState,
  };
  return (
    <HangmanContext.Provider value={value}>{children}</HangmanContext.Provider>
  );
};
