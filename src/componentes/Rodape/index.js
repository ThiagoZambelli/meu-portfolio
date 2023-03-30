import styles from "./Rodape.module.css"
import miniEu from "assets/eu.png"

export default function Rodape(){
    return(
        <footer className={styles.footer}>
            <img
                src={miniEu}
                className={styles.miniEu}
                alt='Mini Thiago/Polvo'
            />           
            <a href="https://github.com/ThiagoZambelli">
                <p>&#169; Desenvolvido por <strong>Thiago Zambelli</strong></p>
            </a>
        </footer>
    )
}