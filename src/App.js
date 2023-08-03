import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Destination />
      <Crew />
      <Technology />
    </div>
  );
}

export default App;
