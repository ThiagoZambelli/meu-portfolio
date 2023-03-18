import LinksNav from '../LinksNav';
import styles from './Nav.module.css';

export default function Nav(){
    

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <LinksNav to="/">
                    Inicio
                </LinksNav>
                <LinksNav to="/sobremim">
                    Sobre mim
                </LinksNav>                
            </nav>
        </header>
    )
}