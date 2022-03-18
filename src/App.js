import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Products } from "./components/Products/Products";
import { SearchBar } from "./components/FilterSearch/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <SearchBar />
        <Products />
      </main>
    </div>
  );
}

export default App;
