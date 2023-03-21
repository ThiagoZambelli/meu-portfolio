import styles from './Formacoes.module.css';
import formacao from 'assets/formacoes.json';

export default function Formacao() {
    return (
        <div className={styles.formacao}>
            <h2>Formação</h2>
            {formacao.map((e) => {
                return(
                    <div key={e.id} className={styles.formacao}>
                        <h2>{e.nome} <strong>: {e.loca}</strong></h2>
                        <h3>{e.nivel} : {e.tempo}</h3>
                    </div>
                )
            })}
        </div>
    )
}

