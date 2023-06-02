import React from "react";
interface Props {
  label: string;
}
const Key: React.FC<Props> = ({ label }) => {
  return (
    <button className="h-12 w-8 bg-light text-dark rounded hover:brightness-90 transition duration-150">
      <span>{label}</span>
    </button>
  );
};

export default Key;
