import "./App.css";
import Heading from "./components/Heading";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <section>
        <Heading />
      </section>
      <section>
        <Introduction />
      </section>
    </div>
  );
}

export default App;
