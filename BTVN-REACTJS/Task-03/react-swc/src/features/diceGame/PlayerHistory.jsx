import React from "react";
import "./diceGame.css";

const PlayerHistory = ({ history }) => {
  const grouped = history.reduce((acc, h) => {
    if (!acc[h.player]) acc[h.player] = [];
    acc[h.player].push(h.roll);
    return acc;
  }, {});

  const tokenColors = ["red", "teal", "orange", "blue", "gray", "purple"];

  return (
    <div className="dice-history">
      <h2>Lịch sử tung xúc xắc</h2>
      <div className="history-grid">
        {Object.keys(grouped).map((player) => (
          <div key={player} className="history-player">
            <div
              className="history-header"
              style={{
                background: tokenColors[(player - 1) % tokenColors.length],
              }}
            >
              Người chơi {player}
            </div>
            <div className="history-rolls">
              {grouped[player].map((r, i) => (
                <span key={i} className="roll-item">
                  {r}
                </span>
              ))}
            </div>
          </div>
        ))}
        {Object.keys(grouped).length === 0 && (
          <p className="history-empty">Chưa có lượt tung nào</p>
        )}
      </div>
    </div>
  );
};

export default PlayerHistory;
