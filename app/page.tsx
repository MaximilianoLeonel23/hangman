import Image from "next/image";
import start from "../assets/hangman/start.svg";
import end from "../assets/hangman/end.svg";
import Keyboard from "@/components/Keyboard";
import SelectedWord from "./../components/SelectedWord";

const HomePage: React.FC = () => {
  const hangmanStates = [start, end];
  return (
    <main className="min-h-screen ">
      <section className="flex sm:container mx-auto">
        <div className="flex flex-col gap-y-3  w-1/2 p-4">
          <h1 className="text-dark font-semibold text-xl">Ahorcado</h1>
          <p className="text-dark font-light text-sm">
            ¡Adivina la palabra antes de ser ahorcado!
          </p>
          <button className="bg-dark px-4 w-fit py-1 rounded text-light text-sm">
            Empezar
          </button>
          <p className="text-dark text-sm">
            Intentos: <span>7</span>
          </p>
        </div>
        <div className="w-1/2">
          <Image src={end} alt="hangman" className="mx-auto" />
        </div>
      </section>
      <section className="flex flex-col bg-dark">
        <SelectedWord />
        <Keyboard />
      </section>
    </main>
  );
};

export default HomePage;
