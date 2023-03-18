import styles from './Card.module.css';

export default function Card({ tec }) {    
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardFront} style={{backgroundColor:tec.cor}}>
                <img alt={`Logo referente ha ${tec.nome}`} src={tec.imagem} />
            </div>
            <div className={styles.cardBack} style={{backgroundColor:tec.cor}}>
                <div className={styles.backCabecalho}>
                    <img src={tec.imagem}/>
                    <h2>{tec.nome}</h2>
                </div>
                <p>Vamos conhecer um pouco dos meus projetos com essa tecnologia?</p>
            </div>
        </div>

    )
}