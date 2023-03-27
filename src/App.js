import PaginaPadrao from "componentes/PaginaPadrao";
import TecnologiaDescricao from "componentes/TecnologiaDescricao";
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
            <Route index element={<Inicio />} />
            <Route path="sobremim" element={<SobreMim />} />            
          </Route>
          <Route path="tecnologias/:id" element={<TecnologiaDescricao />} />          
          <Route path="*" element={<div>Pagina não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
