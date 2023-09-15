import styles from '../styles/Maincontainer.module.css'
import Image from 'next/image'
import AboutUs from '@/components/AboutUs'
import Form from '@/components/Form'

export default function Home() {
  return (
    <>
      <div  className={styles.container}>
        HERO / 
        <AboutUs/>
         / IMAGEM 
        <Form/>
      </div>
    </>
  )
}
