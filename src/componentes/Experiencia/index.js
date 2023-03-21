import styles from './Experiencia.module.css';
import experiencias from 'assets/experiencia.json';

export default function Experiencias(){
    return(
        <div className={styles.experiencias}>
            <h2>Experiencias Profissionais</h2>
            {experiencias.map((e) => {
                return(
                    <div key={e.id}>
                        <h2>{e.funcao}</h2>
                        <h3>{e.loca}</h3>
                        <h3>{e.tempo}</h3>
                        <p>{e.descricao}</p>
                    </div>
                )
            })}

        </div>
    )
}