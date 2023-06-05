"use client";
import { useEffect, useState, useContext } from "react";
import HangmanImage from "./../components/HangmanImage";
import Keyboard from "@/components/Keyboard";
import SelectedWord from "./../components/SelectedWord";
import {
  UsedLetterContext,
  IUsedLetterState,
} from "@/contexts/usedLetter.context";
import {
  HangmanContext,
  IHangmanContext,
} from "@/contexts/hangmanState.context";
import { ISecretWord, SecretWordContext } from "@/contexts/secretWord.context";
import Tries from "../components/Tries";
import GameHeader from "@/components/GameHeader";
import Notifications from "./../components/Notifications";
import { getSecretWord, getDifficulty } from "@/contants/words";

const HomePage: React.FC = () => {
  const [matchLabel, setMatchLabel] = useState<string>("Empezar partida");
  const [game, setGame] = useState<boolean>(false);
  const [tries, setTries] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<number>(1);
  const { secretWord, setSecretWord } =
    useContext<ISecretWord>(SecretWordContext);
  const { usedLetter, setUsedLetter } =
    useContext<IUsedLetterState>(UsedLetterContext);
  const { setHangmanState } = useContext<IHangmanContext>(HangmanContext);

  useEffect(() => {
    if (game === true) {
      checkGameStatus();
    }
  }, [usedLetter]);

  const checkGameStatus = () => {
    const allLetterThere = secretWord.every((letter) =>
      usedLetter.includes(letter)
    );
    if (allLetterThere) {
      endGame(true);
    } else if (tries === 0) {
      endGame(false);
    }
  };

  const startGame = () => {
    setGame(true);
    const secretWord = getSecretWord(getDifficulty(difficulty));
    setSecretWord(secretWord);
    setTries(7);
    setHangmanState(0);
  };

  const endGame = (winner: boolean) => {
    setGame(false);
    setTries(null);
    const showWord = secretWord.join("");
    if (winner) {
      setHangmanState(8);
      setMatchLabel(`¡Felicidades! Te has salvado, la palabra era ${showWord}`);
    } else {
      setHangmanState(7);
      setMatchLabel(
        `¿Te moriste? ¿Tan rápido? Qué mala suerte...La palabra era ${showWord}`
      );
    }

    setTimeout(() => {
      setMatchLabel("Juega otra vez");
    }, 7000);
    setUsedLetter([]);
    setSecretWord([]);
  };

  const handleDifficulty = () => {
    difficulty === 3 ? setDifficulty(1) : setDifficulty((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-dark">
      <section className="bg-light">
        <div className="flex mx-auto sm:container">
          <div className="flex flex-col gap-y-3  w-1/2 p-4 sm:pt-12">
            <GameHeader
              game={game}
              startGame={startGame}
              matchLabel={matchLabel}
              handleDifficulty={handleDifficulty}
              difficulty={difficulty}
            />
            <Tries game={game} tries={tries} />
            <Notifications game={game} />
          </div>
          <HangmanImage />
        </div>
      </section>
      <section className="flex flex-col bg-dark sm:pb-16">
        <SelectedWord secretWord={secretWord} />
        <Keyboard game={game} tries={tries} setTries={setTries} />
      </section>
    </main>
  );
};

export default HomePage;
