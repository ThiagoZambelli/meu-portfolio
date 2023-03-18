import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componentes/Nav";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/"  element={<Inicio /> }/>
        <Route path="/sobremim" element={<SobreMim />}/>
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
