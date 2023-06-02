import React from "react";
import Keys from "./Keys";
const Keyboard: React.FC = () => {
  return (
    <div className="px-4 py-6 flex flex-wrap items-center justify-center gap-2 mx-auto">
      <Keys />
    </div>
  );
};

export default Keyboard;
