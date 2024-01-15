import React from "react";

type HangmanWordProps = {
  guessedWords: string[];
  wordToGuess: string;
  reveal?: boolean
};

const HangmanWord = ({ guessedWords, wordToGuess, reveal=false }: HangmanWordProps) => {

  return (
    <div
      style={{
        gap: "0.25rem",
        display: "flex",
        fontSize: "4rem",
        textTransform: "uppercase",
        fontWeight: "bold",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        
        <span
          style={{ borderBottom: ".5rem solid yellow", marginLeft: "1rem" }}
          key={index}
        >
           <span
            style={{
              visibility:
                guessedWords.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedWords.includes(letter) && reveal ? "red" : "green",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
