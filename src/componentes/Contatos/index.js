import React from 'react'
import { Link } from 'react-router-dom'
import eu from 'assets/eu.png'
import styles from './Contatos.module.css'
import Curriculo from 'componentes/Curriculo';

const meuGitHub = 'https://github.com/ThiagoZambelli';
const meuLinkedin = 'https://www.linkedin.com/in/thiagozambelli';

function Contatos() {
    return (
        <>
        <h2 className={styles.contatosTitulos}>Meus Contatos</h2>
        <section className={styles.meusContatos}>
            <img alt='O mini EuPolvino' src={eu} className={styles.eu}/>
            <div className={styles.contatos}>
                <Curriculo />
                <Link to={meuLinkedin} className={styles.link}>
                    <img alt='Logo linkedin' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                    Meu linkedin
                </Link>
                <Link to={meuGitHub} className={styles.link}>
                    <img alt='Logo do GitHub' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    Meu GitHub
                </Link>
            </div>

        </section>
        </>
    )
}

export default Contatos