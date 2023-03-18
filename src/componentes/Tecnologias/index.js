import styles from './Tecnologias.module.css';
import tecnologias from '../../assets/tecnologias.json'
import Card from '../Card';

export default function Tecnologias() {
    return (
        <div className={styles.tecnologias}>
            <h2 className={styles.tecnologiasTitulo}>Tecnologias Conhecidas:</h2>
            <div className={styles.tecnologiasCards}>
                {tecnologias.map((e) => {
                    return (
                        <Card tec={e} key={e.id} />
                    )
                })}
            </div>
        </div>
    )
}