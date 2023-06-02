import { keys } from "@/contants/keyboardKeys";
import React from "react";
import Key from "./Key";

const Keys: React.FC = () => {
  return (
    <>
      {keys.map((key) => {
        return <Key label={key} key={key} />;
      })}
    </>
  );
};

export default Keys;
