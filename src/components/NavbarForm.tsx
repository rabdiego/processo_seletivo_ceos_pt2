'use client'

import Link from 'next/link';
import styles from '../styles/NavbarForm.module.css'
import Image from 'next/image'

export default function NavbarForm() {

    return(
    <nav  className={styles.navbar}>
        <div className={styles.logo}>
            <a href='../'>
                <Image src='/smllogo.png' alt='logo' width={60} height={70}/>
                <p>verFitting</p>
            </a>
        </div>
        
        <ul>
            <li>
                <div className={styles.button}><a className='categories' href="/#sobre-nos">Sobre Nós</a></div>
            </li>
            <li>
                <div className={styles.button}><a className='categories' href="/#teste-self">Teste Você Mesmo</a></div>
            </li>
            <li>
                <div className={styles.button}><a className='categories' href="/#contate-nos">Fale Conosco</a></div>
            </li>
        </ul>
    </nav>
    )
}