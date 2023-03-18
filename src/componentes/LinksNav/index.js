import { Link, useLocation } from 'react-router-dom';
import styles from './LinksNav.module.css';

export default function LinksNav({to, children}){
    const localizacao = useLocation();

    return(
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkAtivo : ''}
        `} to={to} >
            {children}
        </Link>
    )
}