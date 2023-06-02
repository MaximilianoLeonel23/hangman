import React from "react";
interface Props {
  label: string;
}
const Letter: React.FC<Props> = ({ label }) => {
  return (
    <div className="flex items-center justify-center border-b border-light w-8 h-8 text-light">
      <span>{label}</span>
    </div>
  );
};

export default Letter;
