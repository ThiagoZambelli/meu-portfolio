import styles from './Card.module.css';
import tecnologias from '../../assets/tecnologias.json'

export default function Card(){
    return (
        tecnologias.map((e)=>{
            return(
                <div>
                    <h2>{e.nome}</h2>
                    <img src={e.imagem} />
                </div>
            )
        })
    )
}