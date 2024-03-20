// SentimentAnalysisGame.js

import React, { useState, useEffect } from 'react';
import './SentimentAnalysisForm.css'; // Import your custom CSS file

const SentimentAnalysisGame = () => {
  const [inputText, setInputText] = useState('');
  const [sentimentResult, setSentimentResult] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(true); // Game starts as over initially
  const [wordScores, setWordScores] = useState([]);
  const [allWords, setAllWords] = useState(new Set());

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSentimentAnalysis = async () => {
    // If game is over, reset the game
    if (gameOver) {
      setGameOver(false);
      setScore(0);
      setTimer(30);
      setWordScores([]);
      setAllWords(new Set());
    } else {
      // Continue with sentiment analysis
      try {
        if (allWords.has(inputText.toLowerCase()) ) {
          // Word has already been used
          alert('You cannot use the same word again!');
          return;
        }
         if (inputText=="") {
            // Word has already been used
            alert('Input Is Empty!');
            return;
          }

        const response = await fetch('http://127.0.0.1:5000/sentiment-analysis', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: inputText }),
        });

        const data = await response.json();
        setSentimentResult(data.sentiment);

        // Update the score based on sentiment
        const wordScore = data.sentiment === 'positive' ? 1 : -1;

        setScore((prevScore) => prevScore + wordScore);

        // Store the score for the current word
        setWordScores((prevWordScores) => [...prevWordScores, { word: inputText, score: wordScore }]);

        // Store the entered word
        setAllWords((prevAllWords) => new Set([...Array.from(prevAllWords), inputText.toLowerCase()]));

        // Clear the input field after analysis
        setInputText('');
      } catch (error) {
        console.error('Error during sentiment analysis:', error);
      }
    }
  };

  useEffect(() => {
    let countdown;

    if (!gameOver) {
      countdown = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          setGameOver(true);
          clearInterval(countdown);
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [timer, gameOver]);

  return (
    <div className="game-container">
      <h2>Sentiment Analysis Game</h2>
      <div className="input-group">
        <input
          required
          type="text"
          name="text"
          autoComplete="off"
          className="input"
          value={inputText}
          onChange={handleInputChange}
          disabled={gameOver}
        />
        <label className="user-label">Enter Text</label>
        <button className="enter-button" onClick={handleSentimentAnalysis}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 40 27"
            className="arrow"
          >
            <line strokeWidth="2" stroke="white" y2="14" x2="40" y1="14" x1="1"></line>
            <line
              strokeWidth="2"
              stroke="white"
              y2="1.41537"
              x2="10.4324"
              y1="14.2433"
              x1="1.18869"
            ></line>
            <line
              strokeWidth="2"
              stroke="white"
              y2="13.6007"
              x2="1.20055"
              y1="26.2411"
              x1="10.699"
            ></line>
            <line
              stroke="white"
              y2="14.3133"
              x2="1.07325"
              y1="13.6334"
              x1="0.33996"
            ></line>
            <line strokeWidth="2" stroke="white" y2="13" x2="39" y1="8" x1="39"></line>
          </svg>
          {gameOver ? 'START' : 'ENTER'}
        </button>
        <p>Time remaining: {timer}s</p>
        {gameOver && <p>Game Over! Final Score: {score}</p>}
        {sentimentResult && <p>Sentiment: {sentimentResult}</p>}
        <div>
          <p>Words and Scores:</p>
          <ul>
            {Array.from(allWords).map((word, index) => (
              <li key={index}>
                {word}: {wordScores[index].score} points
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysisGame;
