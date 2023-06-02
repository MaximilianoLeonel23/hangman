import React from "react";
import Letter from "./Letter";
interface Props {
  secretWord: string[];
}
const SelectedWord: React.FC<Props> = ({ secretWord }) => {
  return (
    <div className="px-4 py-6 flex flex-wrap items-center justify-center gap-2 mx-auto">
      {secretWord ? (
        secretWord.map((letter, i) => {
          return <Letter label={letter} key={i} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SelectedWord;
