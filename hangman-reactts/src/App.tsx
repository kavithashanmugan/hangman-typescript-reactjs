import { useState } from 'react'
import './App.css'
import words from './words.json'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

const App = () => {
  const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)]
  }
  const [wordToGuess, setWordToGuess] = useState(getRandomWord)
  const [guessedWord, setGuessedWord] = useState<string[]>([])

  return (
    <div>
      <div 
      style={{
        maxWidth:"1200px",
        display:"flex",
        flexDirection:"column",
        gap:"2rem",
        margin:"0 auto",
        alignItems:"center"

      }}>
        <h1>Hangman</h1>
        <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win
          <HangmanDrawing />
          
        </div>
        <HangmanWord/>
        <div style={{alignSelf:'stretch'}}> <Keyboard/></div>
       
      </div>
      
    </div>
  )
}

export default App
