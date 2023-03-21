import styles from './Banner.module.css';
import baseBanner from 'assets/baseBanner.png'
import minhaFoto from 'assets/minhaFoto.png'

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1>
                    Olá, Bem-vindo ao meu Portfólio !
                </h1>
                <p className={styles.texto}>
                    Boas vindas ao meu <strong>‘thiago-container’</strong>! Me chamo Thiago Zambelli, Programador Front-end Júnior. Aqui vou mostrar tudo o que sei e o que estou aprendendo, além de deixar conhecimentos para outras pessoas. Espero sinceramente que possa te ajudar e, talves ensinar algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.fundo}
                    src={baseBanner}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Thiago Zambelli"
                />

            </div>

        </section>
    )
}