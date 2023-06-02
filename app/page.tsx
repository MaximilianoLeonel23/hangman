"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getSecretWord } from "@/contants/words";
import startDesktop from "../assets/hangman/startDesktop.svg";
import endDesktop from "../assets/hangman/endDesktop.svg";
import Keyboard from "@/components/Keyboard";
import SelectedWord from "./../components/SelectedWord";
import { useContext } from "react";
import { HangmanContext, IUsedLetterState } from "@/contexts/hangman.context";
import { ISecretWord, SecretWordContext } from "@/contexts/secretWord.context";

const HomePage: React.FC = () => {
  const hangmanStates = [endDesktop, startDesktop];
  const [matchLabel, setMatchLabel] = useState<string>("Empezar partida");
  const [hangman, setHangman] = useState<string>(endDesktop);
  const [game, setGame] = useState<boolean>(false);
  const [tries, setTries] = useState<number | null>(null);
  const { secretWord, setSecretWord } =
    useContext<ISecretWord>(SecretWordContext);
  const { usedLetter, setUsedLetter } =
    useContext<IUsedLetterState>(HangmanContext);

  useEffect(() => {
    if (game === true) {
      const allLetterThere = secretWord.every((letter) =>
        usedLetter.includes(letter)
      );
      if (allLetterThere) {
        const winner: boolean = true;
        endGame(winner);
      } else if (tries === 0) {
        const winner: boolean = false;
        endGame(winner);
      }
    }
  }, [usedLetter]);

  const startGame = () => {
    const secretWord = getSecretWord("medium");
    setSecretWord(secretWord);
    setGame(true);
    setTries(7);
    setHangman(hangmanStates[1]);
  };

  const endGame = (winner: boolean) => {
    console.log("Se han acertado todas las letras");
    setGame(false);
    setTries(null);
    if (winner) {
      setHangman(hangmanStates[0]);
      setMatchLabel("¡Felicidades! Has acertado");
      console.log("hubo un ganador");
    } else {
      setHangman(hangmanStates[0]);
      console.log("No hubo ganador");
    }
    setUsedLetter([]);
    setSecretWord([]);

    setInterval(() => {
      setMatchLabel("Juega otra vez");
    }, 3000);
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
              className="bg-dark px-4 w-fit py-2 border border-dark rounded text-light text-sm"
            >
              {matchLabel}
            </button>
          )}
          <p
            className={`${
              game ? "block" : "hidden"
            } text-dark text-sm px-4 py-2 border border-dark rounded w-fit`}
          >
            Intentos: <span>{tries ? tries : null}</span>
          </p>
        </div>
        <div className="w-1/2">
          <Image src={hangman} alt="hangman" className="mx-auto" />
        </div>
      </section>
      <section className="flex flex-col bg-dark">
        <SelectedWord secretWord={secretWord} />
        <Keyboard game={game} tries={tries} setTries={setTries} />
      </section>
    </main>
  );
};

export default HomePage;
