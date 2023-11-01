import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Componentes/Home";
import InfoUstedes from "./Componentes/InfoUstedes"
import MisCeaciones from "./Componentes/MisCreaciones";
import Favoritos from "./Componentes/Favoritos"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/InfoUstedes" element={<InfoUstedes />}></Route>
            <Route path="/MisCreaciones" element={<MisCeaciones />}></Route>
            <Route path="/Favoritos" element={<Favoritos />}></Route>

          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
