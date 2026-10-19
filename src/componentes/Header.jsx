export function Header({ brand, description, children }) {
  return (
    <header> 
      <div> 
        <span> GT </span>
      </div>
      <div>
        <strong> {brand} </strong>
        <span> {description} </span>
      </div>
      <nav>
        {children}
      </nav>
    </header>
  );
}