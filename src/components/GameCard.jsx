import { useState } from "react";
import "./GameCard.css";

export default function GameCard({ game }) {
  const [expanded, setExpanded] = useState(false);

  const ratingColor =
    game.rating >= 8 ? "limegreen" : game.rating >= 6 ? "gold" : "red";

  const statusColors = {
    completato: "limegreen",
    "in-corso": "orange",
    wishlist: "dodgerblue",
    abbandonato: "gray",
  };

  return (
    <div className="game-card" onClick={() => setExpanded(!expanded)}>
      <img src={game.cover} alt={game.title} />

      <div className="game-info">
        <h3>{game.title}</h3>
        <p className="genre">{game.genre}</p>
        <p style={{ color: ratingColor }}>Voto: {game.rating}</p>

        <span
          className="status-badge"
          style={{ background: statusColors[game.status] }}
        >
          {game.status}
        </span>
        {expanded && (
          <div className="game-details">
            <p>Piattaforma: {game.platform}</p>
            <p>Anno: {game.year}</p>
            <p>Prezzo: {game.price}</p>
            <p>Ore giocate: {game.hoursPlayed}</p>
            <p>Difficoltà: {game.difficulty}</p>
          </div>
        )}
      </div>
    </div>
  );
}