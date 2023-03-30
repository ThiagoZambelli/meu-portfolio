import React from 'react'
import style from './TecnologiaDescricao.module.css'
import tecnologias from 'assets/tecnologias.json';
import { useParams } from 'react-router-dom';
import Rodape from 'componentes/Rodape';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import LinkExemplo from 'componentes/LinkExemplo';

function TecnologiaDescricao() {
    const params = useParams();

    const tecnologia = tecnologias.find((e) => {
        return e.id === Number(params.id)
    })
    

    return (
        <>
            <section className={style.tecnologiaContainer}>
                <aside style={{ backgroundColor: tecnologia.cor }} className={style.tecnologiaAside}>
                    <img src={tecnologia.imagem} alt={`Logo da(o) ${tecnologia.nome}`} />
                </aside>
                <div className={style.descricao}>
                    <ReactMarkdown>
                        {tecnologia.texto}
                    </ReactMarkdown>
                    <div className={style.exemplos}>
                        {tecnologia.projetos === "" ? <></> :
                        tecnologia.projetos.map((e) => {
                            return <LinkExemplo
                                key={e.id}
                                imagem={`/assets/${params.id}/${e.id}.png`}
                                descricao={e.descricao}
                                link={e.link}
                                cor={tecnologia.cor}                               
                            />
                        })}
                    </div>
                    <div className={style.final}>
                    <ReactMarkdown>
                        {tecnologia.final}
                    </ReactMarkdown>
                    </div>
                </div>
            </section>
            <Rodape />
        </>
    )
}

export default TecnologiaDescricao