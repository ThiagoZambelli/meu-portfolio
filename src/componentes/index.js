import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav(){

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.link} to={'/'}>
                    Portfolio
                </Link>
                <Link className={styles.link} to={'/sobremim'}>
                    Sobre Mim
                </Link>
            </nav>
        </header>
    )
}