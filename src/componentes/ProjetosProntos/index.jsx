import { Link } from 'react-router-dom';
import styles from './ProjetosProntos.module.scss';
import projetosProntos from 'assets/db/projetosProntos.json';

const ProjetosProntos = () => {

    return (
        <section className={styles.projetosProntos}>
            <h2>Projetos Prontos</h2>
            {projetosProntos.map(projeto => (
                <Link key={projeto.id} to={projeto.deploy} className={styles.projetosProntos__container}>
                    <img src={`assets/img/${projeto.id}.png`} alt='Imagem do projeto' />
                    <h3>{projeto.projeto}</h3>
                </Link>
            ))}
        </section>
    )
}

export default ProjetosProntos