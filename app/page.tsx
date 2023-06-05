"use client";
import { useEffect, useState } from "react";
import HangmanImage from "./../components/HangmanImage";
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
import Star from "@/components/Star";

const HomePage: React.FC = () => {
  const [matchLabel, setMatchLabel] = useState<string>("Empezar partida");
  const [game, setGame] = useState<boolean>(false);
  const [tries, setTries] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<number>(3);
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
    let secretWord: string[];
    console.log(difficulty);
    switch (difficulty) {
      case 1:
        secretWord = getSecretWord("easy");
        break;
      case 2:
        secretWord = getSecretWord("medium");
        break;
      case 3:
        secretWord = getSecretWord("hard");
        break;
      default:
        secretWord = getSecretWord("easy");
    }
    console.log(secretWord);
    setSecretWord(secretWord);
    setGame(true);
    setTries(7);
    setHangmanState(0);
  };

  const endGame = (winner: boolean) => {
    console.log("Se han acertado todas las letras");
    setGame(false);
    setTries(null);
    setDifficulty(1);
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

  const handleDifficulty = () => {
    difficulty === 3 ? setDifficulty(1) : setDifficulty((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen sm:h-screen">
      <section className="flex sm:container mx-auto">
        <div className="flex flex-col gap-y-3  w-1/2 p-4">
          <h1 className="text-dark font-semibold text-xl sm:text-3xl">
            Ahorcado
          </h1>
          <p className="text-dark font-light text-sm">
            ¡Adivina la palabra antes de ser ahorcado!
          </p>
          {game ? null : (
            <div className="flex flex-wrap gap-4">
              <button
                onClick={startGame}
                className="bg-dark px-4 w-fit py-2 border border-dark rounded text-light text-sm"
              >
                {matchLabel}
              </button>
              <button
                onClick={handleDifficulty}
                className="flex items-center gap-x-1 bg-none px-4 w-fit py-2 border border-incorrect rounded text-dark text-sm"
              >
                Dificultad:{" "}
                <span className="flex gap-x-1 items-center">
                  {Array.from({ length: difficulty }).map((e, index) => (
                    <Star key={index} />
                  ))}
                </span>
              </button>
            </div>
          )}

          <p
            className={`${
              game ? "block" : "hidden"
            } text-dark text-sm px-4 py-2 border border-dark rounded w-fit`}
          >
            Intentos: <span>{tries ? tries : null}</span>
          </p>
        </div>
        <HangmanImage />
      </section>
      <section className="flex flex-col bg-dark sm:pb-16">
        <SelectedWord secretWord={secretWord} />
        <Keyboard game={game} tries={tries} setTries={setTries} />
      </section>
    </main>
  );
};

export default HomePage;
