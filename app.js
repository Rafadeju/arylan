// App.js
import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const words = ["apple", "orange", "banana", "grape"];
const theme = "fruit";

const App = () => {
    const [selectedWords, setSelectedWords] = useState([]);

    const generateWords = () => {
        return words.map((word, index) => (
            <span
                key={index}
                className={`word ${selectedWords.includes(word) ? 'selected' : ''}`}
                onClick={() => toggleWord(word)}
            >
                {word}
            </span>
        ));
    };

    const toggleWord = (word) => {
        if (selectedWords.includes(word)) {
            setSelectedWords(selectedWords.filter(selectedWord => selectedWord !== word));
        } else {
            setSelectedWords([...selectedWords, word]);
        }
    };

    const checkAnswer = () => {
        if (selectedWords.length !== words.length) {
            alert("You must select exactly four words.");
            return;
        }

        const isCorrect = selectedWords.every(selectedWord => words.includes(selectedWord));

        if (isCorrect) {
            alert("Congratulations! You found the correct connection.");
        } else {
            alert("Sorry, your answer is incorrect.");
        }
    };

    return (
        <div className="container">
            <h1>Connections</h1>
            <p>Find the common thread between the following words:</p>
            <div id="words">{generateWords()}</div>
            <button onClick={checkAnswer}>Check Answer</button>
        </div>
    );
};

export default App;
