'use client'

import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {

    function refreshPage() {
        window.location.reload();
    }

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "")
        const elem = document.getElementById(targetId)
        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth"
        })
    }

    return(
    <nav  className={styles.navbar}>
        <div className={styles.logo} onClick={refreshPage}>
            <Image src='/smllogo.png' alt='logo' width={60} height={70}/>
            <p>verFitting</p    >
        </div>
        
        <ul>
            <li>
                <div className={styles.button}><a href='#sobre-nos' onClick={handleScroll}>Sobre Nós</a></div>
            </li>
            <li>
                <div className={styles.button}><a href='#teste-self' onClick={handleScroll}>Teste Você Mesmo</a></div>
            </li>
            <li>
                <div className={styles.button}><a href='#contate-nos' onClick={handleScroll}>Fale Conosco</a></div>
            </li>
        </ul>
    </nav>
    )
}