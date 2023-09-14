import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.logo}>logo</section>
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
                        <li>Rua Tchurusbango Tchurusbago, 1234, Beurveuli Reels</li>
                    </div>
                </div>
            </section>
            <section className={styles.copyright}>
                <h2>OverFitting &copy; - 2023</h2>
            </section>
            
            
        </footer>
    )
}