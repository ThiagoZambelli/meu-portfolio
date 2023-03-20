import Banner from "componentes/Banner";
import Rodape from "componentes/Rodape";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(){
    return(
        <main>
            <Banner />
            <Outlet />
            <Rodape />
        </main>
    )
}