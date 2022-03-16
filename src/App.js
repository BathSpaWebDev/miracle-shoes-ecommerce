import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Products } from "./components/Products/Products";
import { ProductPage} from "./components/Products/Products";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
   
        <Products />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
