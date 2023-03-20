import PaginaPadrao from "componentes/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componentes/Nav";
import ScrollToTop from './componentes/ScrollToTop'
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function App() {
  return (
    <main>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />

        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobremim" element={<SobreMim />} />
          </Route>          
          <Route path="*" element={<div>Pagina não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
