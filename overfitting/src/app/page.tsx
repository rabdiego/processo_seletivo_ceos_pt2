import styles from '../styles/Maincontainer.module.css'
import Hero from '@/components/Hero'
import TryYourself from '@/components/TryYourself'

export default function Home() {
  return (
    <>
      <Hero/>
      <div  className={styles.container}>
        SOBRE NÓS
      </div>
      <TryYourself/>
      <div  className={styles.container}>
        FORMULÁRIO
      </div>
    </>
  )
}
