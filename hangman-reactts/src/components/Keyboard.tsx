import styles from "./Keyboard.module.css";
const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type KeyboardProps = {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};
const Keyboard = ({
  disabled = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,auto))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((letter) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);

        return (
          <button
            onClick={() => addGuessedLetter(letter)}
            disabled={isInactive || isActive || disabled}
            key={letter}
            className={`${styles.btn} ${isActive ? styles.active : ""}
             ${isInactive ? styles.inactive : ""}`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
