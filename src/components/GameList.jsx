import GameCard from "./GameCard";

export default function GameList({ games }) {
  if (!games.length) {
    return <p style={{ color: "#aaa" }}>Nessun gioco trovato 🎮</p>;
  }

  return (
    <div
      className="game-list"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}