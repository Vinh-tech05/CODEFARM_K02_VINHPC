import React from "react";
import { useState } from "react";
import Card from "./Card";

const GameCardFlipping = () => {
  const initializeCards = () => {
    const cards = Array(12)
      .fill()
      .map((_, index) => ({
        id: index,
        isFlipped: false,
        isLucky: false,
      }));
    const luckyIndex = Math.floor(Math.random() * 12);
    cards[luckyIndex].isLucky = true;
    // console.log({ luckyIndex });

    return cards;
  };

  const [cards, setCards] = useState(() => initializeCards());
  const [attempts, setAttempts] = useState(3);
  const [gameStatus, setGameStatus] = useState(null);

  const handleCardClick = (id) => {
    if (gameStatus || attempts === 0) return;

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id && !card.isFlipped ? { ...card, isFlipped: true } : card
      )
    );

    const clickedCard = cards.find((card) => card.id === id);
    if (clickedCard.isLucky) {
      setGameStatus("win");
    } else {
      setAttempts((prev) => {
        const newAttempts = prev - 1;
        if (newAttempts === 0) {
          setGameStatus("lose");
        }
        return newAttempts;
      });
    }
  };

  const resetGame = () => {
    setCards(initializeCards());
    setAttempts(3);
    setGameStatus(null);
  };
  return (
    <div className="app-container">
      <h1>Trò chơi lật bài</h1>
      <p>Số lượt lật còn lại: {attempts}</p>
      {gameStatus && (
        <p className={`game-status ${gameStatus}`}>
          {gameStatus === "win"
            ? "Chúc mừng đã tìm ra lá vàng."
            : "Phải gì! Phải chịu."}
        </p>
      )}
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            isFlipped={card.isFlipped}
            isLucky={card.isLucky}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <button onClick={resetGame} className="play-again-btn">
        Chơi lại
      </button>
    </div>
  );
};

export default GameCardFlipping;
