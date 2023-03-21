import Experiencias from 'componentes/Experiencia'
import Formacao from 'componentes/Formacoes'
import React from 'react'
import styles from './SobreMim.module.css'

export default function SobreMim() {
  return (
    <div className={styles.sobremim}>
      <div className={styles.resumo}>
        <h2 className={styles.resumoTitulo}>Quem Sou</h2>
        <p>Se eu fosse me resumir em uma pequena frase, acho que seria “Inquietação Criativa”. Eu literalmente amo aprender sobre absolutamente tudo: literatura; astronomia; matemática; religião; antropologia; biologia; eletrônica, culinária; com quantos paus se faz uma canoa, etc! E isso me deu um arcabouço de conhecimentos e habilidades que formam o meu eu.</p>
        <p>Uso minha facilidade em adquirir conhecimento e transformá-lo em algo útil, para ter como maior hobby a evolução pessoal. Já escrevi contos e romances,  já fiz vários tipos de lutas, já fiz a fundação e a rede elétrica de uma casa, já cozinhei os mais diversos pratos, etc.</p>
        <p>Mas meu verdadeiro amor sempre foi a tecnologia. Há muito tempo eu sonho em ser programador e fiz um bocado de coisas para me preparar para isso, inclusive meus 8 anos como militar (dos quais sai com uma carta de honra-ao-mérito) que serviu para custear minhas formações acadêmicas.</p>
        <p>O que posso dizer é: Talvez eu não seja o melhor programador do mundo, mas vou dar absolutamente até minha última gota de suor para ser !</p>
      </div>
      <div className={styles.experiencia}>
        <Experiencias />
      </div>
      <div className={styles.formacao}>
        <Formacao />
      </div>
    </div>
  )
}
