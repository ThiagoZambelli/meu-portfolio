import { useParams } from "react-router-dom";
import tecs from 'assets/tecnologias.json';
import styles from './TecnologiaDescricao.module.css';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function TecnologiaDescricao() {
    const parametros = useParams();

    const tecnologia = tecs.find((e) => {
        return e.id === Number(parametros.id)
    })

    return (
        <section className={styles.postagemTecnologia} >
            <div className={styles.tecnologiaBanner} style={{backgroundColor:tecnologia.cor}}>
                <img

                    src={tecnologia.imagem}
                    alt={`Logo da tecnologia - ${tecnologia.nome}`}
                />
                <h2>{tecnologia.nome}</h2>
            </div>
            <div className={styles.tecnologiaTexto}>
                <ReactMarkdown>
                    {tecnologia.texto}
                </ReactMarkdown>
            </div>

        </section>
    )
}