import { PolicySearch } from "./components/PolicySearch";

function App() {
  return (
    <div>
      <header>
        <h1>Prima</h1>
      </header>
      <main className="policy-list">
        <PolicySearch />
      </main>
    </div>
  );
}

export default App;
