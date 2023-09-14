import styles from '../styles/Maincontainer.module.css'
import Image from 'next/image'
import AboutUs from '@/components/AboutUs'

export default function Home() {
  return (
    <>
      <div  className={styles.container}>
        HERO / 
        <AboutUs/>
         / IMAGEM / FORMULARIO
      </div>
    </>
  )
}
