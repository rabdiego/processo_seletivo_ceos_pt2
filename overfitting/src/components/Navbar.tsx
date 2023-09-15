import styles from '../styles/Navbar.module.css'
import Image from 'next/image'


export default function Navbar() {
    return(
    <nav  className={styles.navbar}>
        <div className={styles.logo}>
            <Image src='/smllogo.png' alt='logo' width={30} height={35}/>
            <p>verFitting</p>
        </div>
        <ul>
            <li>
                <a href='#sobre-nos'>Sobre Nós</a>
            </li>
            <li>
                <a href='#teste-self'>Teste Você Mesmo</a>
            </li>
            <li>
                <a href='#contate-nos'>Fale Conosco</a>
            </li>
        </ul>
    </nav>
    )
}