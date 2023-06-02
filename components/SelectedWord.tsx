import React from "react";
import Letter from "./Letter";

const SelectedWord: React.FC = () => {
  let word: string = "calle";
  const wordArray: string[] = word.toUpperCase().split("");

  return (
    <div className="px-4 py-6 flex flex-wrap items-center justify-center gap-2 mx-auto">
      {wordArray.map((letter) => {
        return <Letter label={letter} key={letter} />;
      })}
    </div>
  );
};

export default SelectedWord;
