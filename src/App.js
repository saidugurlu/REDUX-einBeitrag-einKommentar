import { Routes, Route } from "react-router-dom";
import Artikelliste from "./components/Artikelliste";
import ArtikelDetail  from "./components/Artikelliste";

function App() {
  return (
    <div className="mainContainer">
      <header></header>

      <div className="ui raised very padded text container segment">
        <Routes>
          <Route path="/" element={<Artikelliste />} />
          <Route path="/:id" element={<ArtikelDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
