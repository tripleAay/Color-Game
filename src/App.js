import React, { useState, useEffect } from "react";
import "./App.css";

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

function App() {
  const [targetColor, setTargetColor] = useState("");
  const [colors, setColors] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const newTargetColor = getRandomColor();
    let newColors = Array.from({ length: 6 }, () => getRandomColor());
    const correctIndex = Math.floor(Math.random() * 6);
    newColors[correctIndex] = newTargetColor;
    setTargetColor(newTargetColor);
    setColors(newColors);
    setMessage("");
  };

  const checkGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setMessage("Correct! 🎉");
      setScore((prevScore) => prevScore + 1);
      setTimeout(initializeGame, 1000);
    } else {
      setMessage("Wrong! Try again. ❌");
    }
  };

  const resetGame = () => {
    setScore(0);
    initializeGame();
  };

  return (
    <div className="game-container" data-testid="game-container">
      <h1>Color Guessing Game</h1>
      <p data-testid="gameInstructions">Guess the correct color!</p>
      <div
        className="color-box"
        data-testid="colorBox"
        style={{ backgroundColor: targetColor }}
      ></div>
      <div className="options">
        {colors.map((color, index) => (
          <button
            key={index}
            className="color-btn"
            data-testid="color-btn"
            style={{ backgroundColor: color }}
            onClick={() => checkGuess(color)}
          ></button>
        ))}
      </div>
      <p className="status" data-testid="gameStatus">{message}</p>
      <p className="score" data-testid="score">Score: {score}</p>
      <button className="new-game-btn" data-testid="newGameButton" onClick={resetGame}>
        New Game 
      </button>
    </div>
  );
}

export default App;
















