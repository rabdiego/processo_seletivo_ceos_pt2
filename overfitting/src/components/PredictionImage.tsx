'use client'

import Image from 'next/image'
import styles from '../styles/TryYourself.module.css'
import { useEffect, useState } from 'react'

export default function PredictionImage() {
    
    const [imgPath, setImgPath] = useState('')
    var cont = 0
    useEffect(() => {
        const interval = setInterval(function() {
            document.getElementById('img').src = '/tmp/tmpImg.png' + '?cnt=' + cont++
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })

    return(
        <div className={styles.imageContainer}>
            <Image
            src={imgPath}
            id = 'img'
            alt='Hero'
            width={0}
            height={0}
            sizes='100vw'
            className={styles.image}
            />
        </div>
    )
}