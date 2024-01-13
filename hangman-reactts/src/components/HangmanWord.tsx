import React from 'react'

const HangmanWord = () => {
  const word = 'TELEPHONE';
  const guessedLetters = ['L','E','T']

  return (
    // <div></div>
    <div style={{ gap: '0.25rem', display: 'flex', fontSize: '6rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
      {word.split("").map((letter, index)=>(
      <span style={{borderBottom:'.5rem solid yellow',marginLeft:'1rem'}} key={index}>
        <span style={{visibility:guessedLetters.includes(letter)? 'visible' : 'hidden',color:'orange'}}> {letter}</span>
       </span>
    ))}</div>
  )
}

export default HangmanWord