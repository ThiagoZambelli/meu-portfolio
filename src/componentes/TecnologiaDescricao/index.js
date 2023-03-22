import { useParams } from "react-router-dom";
import tecs from 'assets/tecnologias.json';
import styles from './TecnologiaDescricao.module.css';

export default function TecnologiaDescricao() {
    const parametros = useParams();

    const tecnologia = tecs.find((e) => {
        return e.id === Number(parametros.id)
    })

    return (
        <section className={styles.postagemTecnologia} >
            <div className={styles.tecnologiaBanner}>
                <img
                    
                    src={tecnologia.imagem}
                    alt={`Logo da tecnologia - ${tecnologia.nome}`}
                />
                <h2>{tecnologia.nome}</h2>

            </div>

        </section>
    )
}