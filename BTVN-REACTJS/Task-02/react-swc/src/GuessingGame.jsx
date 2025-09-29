import React, { useState } from "react";

const GuessingGame = () => {
  const [game, setGame] = useState({
    difficulty: null,
    secretNumber: null,
    guess: "",
    history: [],
    attemptsLeft: 10,
    status: "playing",
  });

  const startGame = (level) => {
    let max = 50;
    if (level === "medium") max = 100;
    if (level === "hard") max = 200;

    const randomNumber = Math.floor(Math.random() * max) + 1;
    // console.log(randomNumber);

    setGame({
      difficulty: level,
      secretNumber: randomNumber,
      guess: "",
      history: [],
      attemptsLeft: 10,
      status: "playing",
    });
  };

  const handleGuess = () => {
    if (!game.guess || game.status !== "playing") return;

    const numGuess = parseInt(game.guess, 10);
    let newHistory = [...game.history];

    const diff = Math.abs(game.secretNumber - numGuess);

    if (numGuess === game.secretNumber) {
      newHistory.push({
        value: numGuess,
        hint: "Chính xác!",
        status: "correct",
      });
      setGame((prev) => ({
        ...prev,
        history: newHistory,
        status: "won",
      }));
    } else {
      let status = "far";
      if (diff >= 1 && diff <= 3) status = "very-close";
      else if (diff >= 4 && diff <= 6) status = "close";

      let hint =
        numGuess < game.secretNumber
          ? "Số bí mật lớn hơn"
          : "Số bí mật nhỏ hơn";
      newHistory.push({
        value: numGuess,
        hint,
        status,
      });

      setGame((prev) => ({
        ...prev,
        history: newHistory,
        attemptsLeft: prev.attemptsLeft - 1,
        guess: "",
        status: prev.attemptsLeft - 1 <= 0 ? "lost" : prev.status,
      }));
    }
  };

  const resetGame = () => {
    setGame({
      difficulty: null,
      secretNumber: null,
      guess: "",
      history: [],
      attemptsLeft: 10,
      status: "playing",
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Đoán Số</h2>

      {!game.difficulty && (
        <div>
          <h3>Chọn độ khó:</h3>
          <button onClick={() => startGame("easy")}>Dễ (1-50)</button>
          <button onClick={() => startGame("medium")}>
            Trung bình (1-100)
          </button>
          <button onClick={() => startGame("hard")}>Khó (1-200)</button>
        </div>
      )}

      {game.difficulty && (
        <div>
          <p>Lượt còn lại: {game.attemptsLeft}</p>
          <input
            type="number"
            value={game.guess}
            onChange={(e) =>
              setGame((prev) => ({ ...prev, guess: e.target.value }))
            }
            placeholder="Nhập số bạn đoán..."
          />
          <button onClick={handleGuess}>Đoán</button>

          <h4>Lịch sử đoán:</h4>
          <ul>
            {game.history.map((item) => (
              <li
                key={item.id}
                style={{
                  color:
                    item.status === "correct"
                      ? "blue"
                      : item.status === "very-close"
                      ? "green"
                      : item.status === "close"
                      ? "#98FB98"
                      : "red",
                  marginBottom: "5px",
                }}
              >
                {item.value} - {item.hint}
              </li>
            ))}
          </ul>

          {game.status === "won" && (
            <h3 style={{ color: "green" }}>Bạn đã thắng!</h3>
          )}
          {game.status === "lost" && (
            <h3 style={{ color: "red" }}>
              Bạn thua rồi! Số bí mật là {game.secretNumber}
            </h3>
          )}

          {(game.status === "won" || game.status === "lost") && (
            <button onClick={resetGame}>Chơi lại</button>
          )}
        </div>
      )}
    </div>
  );
};

export default GuessingGame;
