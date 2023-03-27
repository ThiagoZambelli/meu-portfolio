import React from 'react'
import style from './Curriculo.module.css'
import curriculo from './Currículo - Thiago Zambelli.pdf'

function Curriculo() {
    return (
        <a className={style.curriculo} href={curriculo} download="Curriculo - Thiago Zambelli">
            <section>
                Meu Currículo
            </section>
        </a>
    )
}

export default Curriculo