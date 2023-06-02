"use client";

import { useState } from "react";
import Image from "next/image";
import startDesktop from "../assets/hangman/startDesktop.svg";
import endDesktop from "../assets/hangman/endDesktop.svg";
import Keyboard from "@/components/Keyboard";
import SelectedWord from "./../components/SelectedWord";
import { useContext } from "react";
import { HangmanContext, IUsedLetterState } from "@/contexts/hangman.context";
const HomePage: React.FC = () => {
  const hangmanStates = [endDesktop, startDesktop];
  const [hangman, setHangman] = useState<string>(endDesktop);
  const [game, setGame] = useState<boolean>(false);

  const [tries, setTries] = useState<number | null>(null);
  const [secretWord, setSecretWord] = useState<string[]>([]);
  const { usedLetter, setUsedLetter } =
    useContext<IUsedLetterState>(HangmanContext);
  const getSecretWord = (): string[] => {
    let word: string = "calle";
    const secretWord: string[] = word.toUpperCase().split("");
    return secretWord;
  };

  const startGame = () => {
    const secretWord = getSecretWord();
    setSecretWord(secretWord);
    setGame(true);
    setTries(7);
    setHangman(hangmanStates[1]);
  };

  return (
    <main className="min-h-screen ">
      <section className="flex sm:container mx-auto">
        <div className="flex flex-col gap-y-3  w-1/2 p-4">
          <h1 className="text-dark font-semibold text-xl">Ahorcado</h1>
          <p className="text-dark font-light text-sm">
            ¡Adivina la palabra antes de ser ahorcado!
          </p>
          {game ? null : (
            <button
              onClick={startGame}
              className="bg-dark px-4 w-fit py-1 rounded text-light text-sm"
            >
              Empezar
            </button>
          )}
          <p className={`${game ? "block" : "hidden"} text-dark text-sm`}>
            Intentos: <span>{tries ? tries : null}</span>
          </p>
          <p>{usedLetter}</p>
        </div>
        <div className="w-1/2">
          <Image src={hangman} alt="hangman" className="mx-auto" />
        </div>
      </section>
      <section className="flex flex-col bg-dark">
        <SelectedWord secretWord={secretWord} />
        <Keyboard />
      </section>
    </main>
  );
};

export default HomePage;
