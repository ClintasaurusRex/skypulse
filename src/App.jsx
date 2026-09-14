import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="title">SKYPULSE</h1>
        <p className="title-text">Intelligent Weather Anywhere</p>
        <form>
          <label htmlFor="search-input">Search</label>
          <input
            className="search-input"
            id="search-input"
            type="text"
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <section>
          <h2>Current Weather</h2>
        </section>
        <section>
          <h2>Hourly Weather</h2>
        </section>
        <section>
          <h2>Air Quality</h2>
        </section>
      </main>
      <footer>SKYPULSE LTD 2026</footer>
    </>
  );
}

export default App;
