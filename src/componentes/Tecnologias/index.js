import styles from './Tecnologias.module.css';
import tecnologias from '../../assets/tecnologias.json'
import Card from '../Card';

export default function Tecnologias() {
    return (
        <div>
            <h2>Tecnologias Conhecidas:</h2>
            <div className={styles.TecnologiasCards}>
                {tecnologias.map((e) => {
                    return (
                        <Card tec={e} key={e.id} />
                    )
                })}
            </div>
        </div>
    )
}