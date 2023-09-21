import styles from '../styles/AboutUs.module.css'
import Image from 'next/image'

export default function AboutUs() {
    return (
    <section id="sobre-nos">
        <div className={styles.aboutus}>
            <h2>Sobre Nós</h2>
            <p>
                Somos dois empreendedores cearenses apaixonados pela tecnologia e pela saúde.
                <br/>
                Nosso foco é unir as duas áreas a fim de proporcionar a melhor experiência para nossos clientes,
                através do uso da inteligência artificial em seus exercícios.
                <br/>
                Começamos com nossa primeira unidade em Fortaleza, mas hoje você
                já pode encontrar unidades da Overfitting em qualquer estado brasileiro.
            </p>
            <div className={styles.cardcontainer}>
                <div className={styles.card}>
                    <div className={styles.cardcontent}>
                        <Image 
                        src='/diego.png' 
                        alt='diego' 
                        width={0} 
                        height={0}
                        sizes='100vw'
                        className={styles.image}/>
                        <h3>Diego</h3>
                        <h4>FullStack Developer</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardcontent}>
                        <Image 
                        src='/isaac.png' 
                        alt='isaac' 
                        width={0} 
                        height={0}
                        sizes='100vw'
                        className={styles.image}/>
                        <h3>Isaac</h3>
                        <h4>FrontEnd Developer</h4>
                    </div>
                </div>
            </div>
            <h2>Nossas tecnologias</h2>
            <p>
                A inteligência artificial está muito presente nos treinos dos clientes da Overfitting.
                <br/>
                Nosso maior destaque é o uso da tecnologia 
                <span className={styles.human}> Human Pose Estimation</span> para identificar
                se o atleta está executando corretamente o movimento do exercício.
                <br/>
                Além dessa tecnologia, também utilizamos a IA para montar treinos, dietas,
                definir o melhor horário para você, e muito mais!
            </p>
        </div>
    </section>
    )
}