import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return(
    <div>
        <ul className={styles.navbar}>
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
    </div>
    )
}