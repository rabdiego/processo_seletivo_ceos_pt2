'use client'


import styles from '../styles/TryYourself.module.css'

import React, { useState } from 'react'

export default function TryYourself() {
    const [file, setFile] = useState<File>();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return

        try {
            const data = new FormData()
            data.set('file', file)

            const rest = await fetch('/api/upload', {
                method: 'POST',
                body : data
            })

            if (!rest.ok) throw new Error(await rest.text())
        } catch (e: any) {
            console.error(e)
        }
    }

    return(
        <div className={styles.centralizedDiv}>
            <div className={styles.gridContainer}>
                <div className={styles.leftColumn}>
                    <div id='teste-self' className={styles.centralizedDiv}>
                        <h1>Quer testar você mesmo?</h1>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.centralizedDiv}>
                        <form onSubmit={onSubmit}>
                            <input
                            type='file'
                            name='file'
                            onChange={(e) => setFile(e.target.files?.[0])}                            
                            />

                            <input
                            type='submit'
                            value='Upload'
                            />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}