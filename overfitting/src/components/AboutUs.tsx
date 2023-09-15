import styles from '../styles/AboutUs.module.css'
import Image from 'next/image'

export default function AboutUs() {
    return (
    <section id="sobre-nos">
        <div className={styles.aboutus}>
            <h2>Sobre Nós</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis in consequuntur impedit corrupti a iusto ad qui provident? Ad earum ut quod inventore eius odit quis necessitatibus eos assumenda.</p>
            <div className={styles.cardcontainer}>
                <div className={styles.card}>
                    <div className={styles.cardcontent}>
                        <Image src='/diego.png' alt='diego' width={100} height={100} className={styles.image}/>
                        <h3>Diego</h3>
                        <h4>FullStack Developer</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardcontent}>
                    <Image src='/isaac.png' alt='isaac' width={100} height={100} className={styles.image}/>
                        <h3>Isaac</h3>
                        <h4>FrontEnd Developer</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}