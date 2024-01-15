import { useState, useEffect, useCallback } from "react";
import "./App.css";
import words from "./words.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const App = () => {
  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };
  const [wordToGuess, setWordToGuess] = useState(getRandomWord);
  const [guessedWords, setGuessedWords] = useState<string[]>([]);

  const playAgain = () => {
    window.location.reload();
  };
  const inCorrectLetters = guessedWords.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedWords.includes(letter));

  const addGuessedLetter = useCallback(
    (key: string) => {
      if (guessedWords.includes(key) || isWinner || isLoser) return;

      setGuessedWords((currentLetters) => [...currentLetters, key]);
    },
    [guessedWords, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedWords]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedWords([]);
      setWordToGuess(getRandomWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <h1>HANGMAN</h1>
        <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
          {isWinner && (
            <div>
              "Winner! Let's play again"{" "}
              <button onClick={playAgain} className="play-btn">Play Again</button>
            </div>
          )}
          {isLoser && (
            <div>
              "Sorry you lost! Let's play again to win!"{" "}
              <button onClick={playAgain} className="play-btn">Play Again</button>
            </div>
          )}
          </div>
          <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
        
        <HangmanWord
          guessedWords={guessedWords}
          wordToGuess={wordToGuess}
          reveal={isLoser}
        />
        <div style={{ alignSelf: "stretch" }}>
          {" "}
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedWords.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={inCorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
