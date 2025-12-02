import { useState } from "react";
import { games } from "./data/mockData";
import GameList from "./components/GameList";

export default function App() {
  const [activeTab, setActiveTab] = useState("tutti");

  const filteredGames =
    activeTab === "tutti"
      ? games
      : games.filter((g) => g.status === activeTab);

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", padding: "20px" }}>
      <header style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1 style={{ color: "dodgerblue" }}>🎮 GameHub</h1>
        <p style={{ color: "#aaa" }}>Totale giochi: {games.length}</p>
      </header>
      <nav style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
        {["tutti", "completato", "in-corso", "wishlist", "abbandonato"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              background: activeTab === tab ? "dodgerblue" : "#333",
              color: "#fff",
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
      <GameList games={filteredGames} />
    </div>
  );
}