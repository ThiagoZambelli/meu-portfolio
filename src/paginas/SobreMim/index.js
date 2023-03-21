import Experiencias from 'componentes/Experiencia'
import Formacao from 'componentes/Formacoes'
import React from 'react'
import styles from './SobreMim.module.css'

export default function SobreMim() {
  return (
    <div className={styles.sobremim}>
      <div>
        <h2>Quem Sou</h2>
        <p></p>
      </div>
        <Experiencias />     
        <Formacao />      
    </div>
  )
}
