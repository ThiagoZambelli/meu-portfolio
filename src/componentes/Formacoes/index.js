import styles from './Formacoes.module.css';
import formacao from 'assets/formacoes.json';

export default function Formacao() {
    return (
        <div className={styles.formacoes}>
            <h2 className={styles.formacoesTitulo}>Formação</h2>
            {formacao.map((e) => {
                return(
                    <div key={e.id} className={styles.formacao}>
                        <h2 className={styles.formacaoTitulo} >> {e.nome} <strong>: {e.loca}</strong></h2>
                        <h3 className={styles.formacaoDescricao}>{e.nivel} - {e.tempo}</h3>
                    </div>
                )
            })}
        </div>
    )
}

