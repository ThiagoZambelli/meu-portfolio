import React from 'react'
import { Link } from 'react-router-dom'
import style from './LinkExemplo.module.css'





function LinkExemplo({ descricao, link, imagem, cor}) {



    return (
        <Link to={link} className={style.link}>
            <div className={style.conteudo} style={{boxShadow:`0 0 10px ${cor}`}}>
                <h3>{descricao}</h3>
                <img src={imagem} alt='Imagem do projeto' />
            </div>
        </Link>
    )
}

export default LinkExemplo