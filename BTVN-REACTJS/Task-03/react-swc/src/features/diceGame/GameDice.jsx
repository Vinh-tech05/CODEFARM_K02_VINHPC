import React, { useState } from "react";
import PlayerHistory from "./PlayerHistory";
import PlayerStatus from "./PlayerStatus";
import "./diceGame.css";

const GameDice = ({ numPlayers, onRestart }) => {
  const [setup, setSetup] = useState({
    step: "setup",
    numPlayers: null,
    inputValue: "",
  });

  const [gameState, setGameState] = useState({
    positions: [],
    currentTurn: 0,
    history: [],
    winner: null,
  });

  const startGame = () => {
    const n = parseInt(setup.inputValue);
    if (n >= 2 && n <= 6) {
      setSetup({ ...setup, step: "playing", numPlayers: n });
      setGameState({
        positions: Array(n).fill(0),
        currentTurn: 0,
        history: [],
        winner: null,
      });
    } else {
      alert("Chỉ cho phép từ 2 đến 6 người chơi!");
    }
  };

  const rollDice = () => {
    if (gameState.winner) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    const newPositions = [...gameState.positions];
    newPositions[gameState.currentTurn] += roll;

    if (newPositions[gameState.currentTurn] >= 30) {
      setGameState({
        ...gameState,
        positions: newPositions,
        winner: gameState.currentTurn + 1,
      });
      return;
    }

    setGameState({
      ...gameState,
      positions: newPositions,
      history: [
        ...gameState.history,
        { player: gameState.currentTurn + 1, roll },
      ],
      currentTurn:
        roll === 6
          ? gameState.currentTurn
          : (gameState.currentTurn + 1) % setup.numPlayers,
    });
  };

  const restart = () => {
    setSetup({ step: "setup", numPlayers: null, inputValue: "" });
    setGameState({ positions: [], currentTurn: 0, history: [], winner: null });
  };
  if (setup.step === "setup") {
    return (
      <div className="dice-setup">
        <input
          type="number"
          value={setup.inputValue}
          onChange={(e) => setSetup({ ...setup, inputValue: e.target.value })}
          placeholder="Nhập số người chơi (2-6)"
        />
        <button onClick={startGame}>Bắt đầu</button>
      </div>
    );
  }

  const players = Array.from({ length: setup.numPlayers }, (_, i) => i + 1);

  return (
    <div className="dice-game">
      <PlayerStatus players={players} positions={gameState.positions} />
      <PlayerHistory history={gameState.history} />

      {gameState.winner ? (
        <h2> Người chơi {gameState.winner} chiến thắng!</h2>
      ) : (
        <h3>Lượt của người chơi {gameState.currentTurn + 1}</h3>
      )}

      {!gameState.winner && <button onClick={rollDice}>Tung xúc xắc</button>}
      <button onClick={restart}>Chơi lại</button>
    </div>
  );
};

export default GameDice;
