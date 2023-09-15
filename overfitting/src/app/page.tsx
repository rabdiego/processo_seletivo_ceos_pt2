import styles from '../styles/Maincontainer.module.css'

import Hero from '@/components/Hero'
import TryYourself from '@/components/TryYourself'
import PredictionImage from '@/components/PredictionImage'
import AboutUs from '@/components/AboutUs'
import Form from '@/components/Form'


export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <TryYourself/>
      <PredictionImage/>
      <Form/>
    </>
  )
}
