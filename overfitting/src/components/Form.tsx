import React, { useState } from "react";
import styles from '../styles/Form.module.css'
import Image from "next/image";

export default function Form() {
    return (
        <section id="contate-nos">
            <div className={styles.contactus}>
                <h2>Contate-nos!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore at iste repellendus, voluptatem earum dignissimos animi exercitationem. Aperiam, culpa voluptate? Sapiente, ad error quisquam amet ex nemo minus modi.</p>
                <div>
                    <form method="POST" className={styles.form}>
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
                            <button type="submit" className={styles.submit}>Enviar</button>
                        </ul>
                        <Image src='/contactus.jpg' alt="calling" width={1000} height={500} className={styles.formimg} />
                    </form>
                </div>
            </div>
        </section>
    )
}