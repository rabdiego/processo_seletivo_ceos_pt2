import styles from '../styles/Navbar.module.css'
import Image from 'next/image'


export default function Navbar() {
    return(
    <nav  className={styles.navbar}>
        <div className={styles.logo}>
            <Image src='/smllogo.png' alt='logo' width={60} height={70}/>
            <p>verFitting</p>
        </div>
        <ul>
            <li>
                <div className={styles.button}><a href='#sobre-nos'>Sobre Nós</a></div>
            </li>
            <li>
                <div className={styles.button}><a href='#teste-self'>Teste Você Mesmo</a></div>
            </li>
            <li>
                <div className={styles.button}><a href='#contate-nos'>Fale Conosco</a></div>
            </li>
        </ul>
    </nav>
    )
}