"use client";

import state0 from "../assets/hangmanStates/state0.svg";
import state1 from "../assets/hangmanStates/state1.svg";
import state2 from "../assets/hangmanStates/state2.svg";
import state3 from "../assets/hangmanStates/state3.svg";
import state4 from "../assets/hangmanStates/state4.svg";
import state5 from "../assets/hangmanStates/state5.svg";
import state6 from "../assets/hangmanStates/state6.svg";
import state7 from "../assets/hangmanStates/state7.svg";
import state8 from "../assets/hangmanStates/state8.svg";
import { hangmanStates } from "../contants/hangmanStates";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getSecretWord } from "@/contants/words";
import Keyboard from "@/components/Keyboard";
import SelectedWord from "./../components/SelectedWord";
import { useContext } from "react";
import {
  UsedLetterContext,
  IUsedLetterState,
} from "@/contexts/usedLetter.context";
import { ISecretWord, SecretWordContext } from "@/contexts/secretWord.context";
import {
  HangmanContext,
  IHangmanContext,
} from "@/contexts/hangmanState.context";

const HomePage: React.FC = () => {
  const [matchLabel, setMatchLabel] = useState<string>("Empezar partida");
  const [game, setGame] = useState<boolean>(false);
  const [tries, setTries] = useState<number | null>(null);
  const { secretWord, setSecretWord } =
    useContext<ISecretWord>(SecretWordContext);
  const { usedLetter, setUsedLetter } =
    useContext<IUsedLetterState>(UsedLetterContext);
  const { hangmanState, setHangmanState } =
    useContext<IHangmanContext>(HangmanContext);
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
    setHangmanState(0);
  };

  const endGame = (winner: boolean) => {
    console.log("Se han acertado todas las letras");
    setGame(false);
    setTries(null);
    if (winner) {
      setMatchLabel("¡Felicidades! Has acertado");
      setHangmanState(8);
      console.log("hubo un ganador");
    } else {
      setMatchLabel("¿Te moriste? ¿Tan rápido? Qué mala suerte...");
      setHangmanState(7);
      console.log("No hubo ganador");
    }
    setUsedLetter([]);
    setSecretWord([]);
    setInterval(() => {
      setMatchLabel("Juega otra vez");
    }, 5000);
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
          <p>{hangmanState}</p>
        </div>
        <div className="w-1/2">
          <Image
            src={hangmanStates[hangmanState]}
            alt="hangman"
            className="mx-auto"
          />
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
