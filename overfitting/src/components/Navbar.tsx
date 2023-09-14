import styles from '../styles/Navbar.module.css'
import Image from 'next/image'


export default function Navbar() {
    return(
    <nav  className={styles.navbar}>
        <div>
            <p>Overfitting Logo</p>
        </div>
        <ul>
            <li>
                <a>Sobre Nós</a>
            </li>
            <li>
                <a>Teste Você Mesmo</a>
            </li>
            <li>
                <a>Fale Conosco</a>
            </li>
        </ul>
    </nav>
    )
}