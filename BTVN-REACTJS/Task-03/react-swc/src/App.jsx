import { useState } from "react";
import "./App.css";
import GameCardFlipping from "./features/cardGame/GameCardFlipping";
import GameDice from "./features/diceGame/GameDice";

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  return (
    <div className="casino-app">
      <h1 className="casino-title">
        <span>🎰 Chào mừng các con nghiện đến với Casino 🎰</span>
      </h1>

      {!selectedGame && (
        <div className="casino-menu">
          <button
            className="casino-btn"
            onClick={() => setSelectedGame("dice")}
          >
            🎲 Trò chơi xúc xắc
          </button>
          <button
            className="casino-btn"
            onClick={() => setSelectedGame("flip")}
          >
            🃏 Trò chơi lật bài
          </button>
        </div>
      )}

      {selectedGame === "dice" && (
        <div className="casino-game-container">
          <GameDice />
          <button
            className="casino-back-btn"
            onClick={() => setSelectedGame(null)}
          >
            ⬅️ Quay lại sảnh
          </button>
        </div>
      )}

      {selectedGame === "flip" && (
        <div className="casino-game-container">
          <GameCardFlipping />
          <button
            className="casino-back-btn"
            onClick={() => setSelectedGame(null)}
          >
            ⬅️ Quay lại sảnh
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
