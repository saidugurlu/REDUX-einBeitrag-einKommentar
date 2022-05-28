import { Routes, Route } from "react-router-dom";
import Artikelliste from "./components/Artikelliste";
import ArtikelDetail  from "./components/ArtikelDetail";
import ArtikelAdd  from "./components/ArtikelAdd";

function App() {
  return (
    <div className="mainContainer">
      <header></header>

      <div className="ui raised very padded text container segment">
        <Routes>
          <Route path="/" element={<Artikelliste />} />
          <Route path="/posts/:id" element={<ArtikelDetail />} />
          <Route path="/artikeladd" element={<ArtikelAdd />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
