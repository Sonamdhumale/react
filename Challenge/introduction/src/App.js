import "./App.css";
import Headings from "./components/Headings";
import FeaturedIn from "./components/FeaturedIn";
function App() {
  return (
    <div className="App">
      <section>
        <Headings />
      </section>
      <section>
        <FeaturedIn />
      </section>
    </div>
  );
}

export default App;
