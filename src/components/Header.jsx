export default function Header({ title, count }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <span className="badge">Giochi: {count}</span>
    </header>
  );
}