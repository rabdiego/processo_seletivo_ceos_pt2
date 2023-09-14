import styles from '../styles/TryYourself.module.css'

export default function TryYourself() {
    return(
        <div className={styles.centralizedDiv}>
            <div className={styles.gridContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.centralizedDiv}>
                        <h1>Quer testar você mesmo?</h1>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.centralizedDiv}>
                        <button type='button'>Submita uma imagem</button>
                    </div>
                </div>
            </div>
        </div>
    )
}