import React, { useState } from "react";

const choices = ["rock", "paper", "scissors"];

const RockPaperScissors = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [aiChoice, setAiChoice] = useState(null);
    const [result, setResult] = useState("");
    const [score, setScore] = useState({ player: 0, ai: 0 });

    // Function to generate AI move & decide winner
    const playGame = (choice) => {
        setPlayerChoice(choice);
        const randomIndex = Math.floor(Math.random() * 3);
        const aiMove = choices[randomIndex];
        setAiChoice(aiMove);
        checkWinner(choice, aiMove);
    };

    // Function to check the winner
    const checkWinner = (player, ai) => {
        if (player === ai) {
            setResult("It's a Draw!");
        } else if (
            (player === "rock" && ai === "scissors") ||
            (player === "paper" && ai === "rock") ||
            (player === "scissors" && ai === "paper")
        ) {
            setResult("You Win! 🎉");
            setScore((prev) => ({ ...prev, player: prev.player + 1 }));
        } else {
            setResult("AI Wins! 🤖");
            setScore((prev) => ({ ...prev, ai: prev.ai + 1 }));
        }
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen ">
            <h1 className="text-3xl font-bold text-purple-700 mb-6">Rock Paper Scissors</h1>
            
            {/* Choices */}
            <div className="flex gap-4">
                {choices.map((choice) => (
                    <button
                        key={choice}
                        onClick={() => playGame(choice)}
                        className="px-6 py-3 text-white font-bold rounded-lg bg-purple-600 hover:bg-purple-800 transition"
                    >
                        {choice.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Results */}
            {playerChoice && (
                <div className="mt-6 text-lg text-gray-200">
                    <p><strong>You:</strong> {playerChoice.toUpperCase()}</p>
                    <p><strong>AI:</strong> {aiChoice.toUpperCase()}</p>
                    <p className="font-bold mt-2 text-xl">{result}</p>
                </div>
            )}

            {/* Score */}
            <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
                <p className="font-bold">Score</p>
                <p>You: {score.player} | AI: {score.ai}</p>
            </div>
        </div>
    );
};

export default RockPaperScissors;
