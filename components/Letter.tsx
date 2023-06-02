import React, { useState } from "react";
interface Props {
  label: string;
}
const Letter: React.FC<Props> = ({ label }) => {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center border-b border-light w-8 h-8 text-light">
      <span className={isCorrect ? "block" : "hidden"}>{label}</span>
    </div>
  );
};

export default Letter;
