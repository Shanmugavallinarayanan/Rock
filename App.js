



import React, { useState } from 'react';
import './App.css';

const choices = ["rock", "paper", "scissors"];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win!";
  }
  
  return "You lose!";
};

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    const randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);
    setResult(getResult(choice, randomComputerChoice));
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      
      <div>
        <button onClick={() => handleUserChoice("rock")}>Rock</button>
        <button onClick={() => handleUserChoice("paper")}>Paper</button>
        <button onClick={() => handleUserChoice("scissors")}>Scissors</button>
      </div>
      
      {userChoice && computerChoice && (
        <div>
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;


