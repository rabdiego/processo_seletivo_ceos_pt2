import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.logo}>
                <Image src='/biglogo.png' alt='biglogo' width={0} height={0} sizes='100vw' className={styles.footerlogo}/>
            </section>
            <section>
                <div className={styles.addInfo}>
                    <div>
                        <h3>Contatos</h3>
                        <ul>
                            <li>
                                <a>(85) 99619-8499</a>
                            </li>
                            <li>
                                <a>(85) 99232-0590</a>
                            </li>
                        </ul>
                    </div>
                
                    <div>
                        <h3>Endereço</h3>
                        <li>Rua Platina, sala 903, cidade de Jubilife, Sinnoh</li>
                    </div>
                </div>
            </section>
            <section className={styles.copyright}>
                <h2>OverFitting &copy; - 2023</h2>
            </section>
            
            
        </footer>
    )
}