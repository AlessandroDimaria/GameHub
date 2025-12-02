import { useState } from "react";
import { games as mockGames } from "./data/mockData";
import GameList from "./components/GameList";
import Filters from "./components/Filters";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [filters, setFilters] = useState({
    genre: "Tutti",
    platform: "Tutti",
    minRating: 1,
    onlyWishlist: false,
  });


  const filteredGames = mockGames.filter((g) => {
    if (filters.genre !== "Tutti" && g.genre !== filters.genre) return false;
    if (filters.platform !== "Tutti" && g.platform !== filters.platform) return false;
    if (filters.onlyWishlist && g.status !== "wishlist") return false;
    if (g.rating < filters.minRating) return false;
    return true;
  });

  return (
    <div>
      <Filters games={mockGames} filters={filters} setFilters={setFilters} />
      <GameList games={filteredGames} />
       <Header total={filteredGames.length} />
    </div>
  );
}
