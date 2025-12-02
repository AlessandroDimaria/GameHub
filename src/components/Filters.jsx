import "./Filters.css";
export default function GameFilters({ games, filters, setFilters }) {
  const genres = ["Tutti", ...new Set(games.map((g) => g.genre))];
  const platforms = ["Tutti", ...new Set(games.map((g) => g.platform))];

  return (
    <div className="filters">
      <label>
        Genere:
        <select
          value={filters.genre}
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        >
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </label>

      <label>
        Piattaforma:
        <select
          value={filters.platform}
          onChange={(e) => setFilters({ ...filters, platform: e.target.value })}
        >
          {platforms.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>

      <label>
        Voto minimo: {filters.minRating}
        <input
          type="range"
          min="1"
          max="10"
          value={filters.minRating}
          onChange={(e) =>
            setFilters({ ...filters, minRating: Number(e.target.value) })
          }
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.onlyWishlist}
          onChange={(e) =>
            setFilters({ ...filters, onlyWishlist: e.target.checked })
          }
        />
        Solo wishlist
      </label>
    </div>
  );
}