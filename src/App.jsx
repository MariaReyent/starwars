import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Films } from "./pages/Films";
import { Planets } from "./pages/Planets";
import { Species } from "./pages/Species";
import { Starships } from "./pages/Starships";
import { Vehicles } from "./pages/Vehicles";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/species" element={<Species />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </>
  );
}

export default App;
