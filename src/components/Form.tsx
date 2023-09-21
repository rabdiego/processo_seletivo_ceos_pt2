import React, { useState } from "react";
import styles from '../styles/Form.module.css'
import Image from "next/image";


export default function Form() {
 
    return (
        <section id="contate-nos">
            <div className={styles.contactus}>
                <h2>Contate-nos!</h2>
                <p>
                    Tem alguma dúvida, sugestão ou reclamação? Sinta-se bem vindo
                    para nos contactar via email, ou telefone!
                </p>
                <div>
                    <form action="../formsent" className={styles.form}>
                        <ul className={styles.formcontent}>
                            <li>
                                <h4>Nome</h4>
                                <input type="text" name="nome" placeholder="Seu Nome Aqui" required />
                            </li>
                            <li>
                                <h4>Telefone</h4>
                                <input name="ddd" type="tel" pattern="[0-9]{11}" placeholder="(85) 91234-5678" required />
                            </li>
                            <li>
                                <h4>E-mail</h4>
                                <input type="email" name="email" placeholder="seuemail@email.com" required />
                            </li>
                            <button type="submit" className={styles.bttnsubmit}><span>Enviar! </span></button>
                        </ul>
                        <Image src='/contactus.jpg' alt="calling" width={0} height={0} sizes='100vw' className={styles.formimg} />
                    </form>
                </div>
            </div>
        </section>
    )
}