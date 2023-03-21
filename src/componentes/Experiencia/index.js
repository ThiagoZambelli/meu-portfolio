import styles from './Experiencia.module.css';
import experiencias from 'assets/experiencia.json';

export default function Experiencias(){
    return(
        <div className={styles.experiencias}>
            <h2 className={styles.titulo}>Experiencias Profissionais</h2>
            {experiencias.map((e) => {
                return(
                    <div key={e.id}>
                        <h2 className={styles.funcao}>> {e.funcao}</h2>
                        <h3 className={styles.tempoElocal}>{e.local} - {e.tempo}</h3>
                        <p className={styles.descricao}>{e.descricao}</p>
                    </div>
                )
            })}

        </div>
    )
}