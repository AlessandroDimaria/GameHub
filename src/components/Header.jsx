export default function Header({ total, visible }) {
  return (
    <header className="header">
      <h1>
        🎮 Giochi <span>({total})</span>
      </h1>
    </header>
  );
}