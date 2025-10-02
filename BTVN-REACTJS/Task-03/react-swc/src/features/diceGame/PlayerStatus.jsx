import React from "react";
import "./diceGame.css";

const PlayerStatus = ({ players, positions }) => {
  const cells = Array.from({ length: 30 }, (_, i) => i + 1);

  const playersAtPos = (pos) =>
    players
      .map((p, idx) => ({ p, idx }))
      .filter(({ idx }) => positions[idx] === pos)
      .map(({ p }) => p);

  const tokenColors = ["red", "teal", "orange", "blue", "gray", "purple"];

  return (
    <div className="dice-status-wrapper">
      <div className="status-top">
        <div className="start-cell">
          <div className="cell-number">Start</div>
          <div className="tokens">
            {playersAtPos(0).map((p) => (
              <div
                key={p}
                className="token"
                title={`Người chơi ${p}`}
                style={{
                  background: tokenColors[(p - 1) % tokenColors.length],
                }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="board-grid">
          {cells.map((num) => (
            <div key={num} className="board-cell">
              <div className="cell-number">{num}</div>
              <div className="tokens">
                {playersAtPos(num).map((p) => (
                  <div
                    key={p}
                    className="token"
                    title={`Người chơi ${p}`}
                    style={{
                      background: tokenColors[(p - 1) % tokenColors.length],
                    }}
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="legend">
        <strong>Ghi chú:</strong>
        <span className="legend-item">Start = ô bắt đầu (vị trí 0)</span>
        <span className="legend-item">Đích = ô 30</span>
      </div>
    </div>
  );
};

export default PlayerStatus;
