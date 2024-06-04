import "./styles/App.css";
import "./styles/styles.css";
import PokémonPage from "./pages/PokémonPage";
import Header from "./components/Header";

function App() {
  return (
    <section className="grid">
      <Header />
      <PokémonPage />
    </section>
  );
}

export default App;
