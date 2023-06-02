const easy: string[] = [
  "sol",
  "gato",
  "mesa",
  "perro",
  "casa",
  "azul",
  "luz",
  "mano",
  "pan",
  "flor",
];

const medium: string[] = [
  "tigre",
  "ciudad",
  "veloz",
  "invierno",
  "isla",
  "valiente",
  "cobre",
  "nube",
  "cuerda",
  "joven",
];

const hard: string[] = [
  "esdrújula",
  "quimera",
  "efímero",
  "esgrimir",
  "peregrino",
  "oxímoron",
  "pleonasmo",
  "hirsuto",
  "ánfora",
  "efervescente",
];

export const getSecretWord = (difficulty: string): string[] => {
  let wordList: string[];

  switch (difficulty) {
    case "easy":
      wordList = easy;
      break;
    case "medium":
      wordList = medium;
      break;
    case "hard":
      wordList = hard;
      break;
    default:
      wordList = [];
  }

  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  const secretWord: string[] = randomWord.toUpperCase().split("");
  return secretWord;
};
