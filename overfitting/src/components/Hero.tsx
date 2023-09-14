import Image from 'next/image'
import styles from '../styles/Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Image
            src='/Hero.png'
            alt='Hero'
            width={0}
            height={0}
            sizes='100vw'
            className={styles.heroImg}
            />
        </div>
    )
}