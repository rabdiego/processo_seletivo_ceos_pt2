import React, {useState} from "react";
import styles from '../styles/Form.module.css'

export default function Form() {
    return(
        <section id="contate-nos">
            <div>
                <h2>Contate-nos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore at iste repellendus, voluptatem earum dignissimos animi exercitationem. Aperiam, culpa voluptate? Sapiente, ad error quisquam amet ex nemo minus modi.</p>
                <div>
                    <form method="POST">
                        <div>
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder="Seu Nome Aqui" required/>
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input  name="ddd" type="tel" pattern="[0-9]{11}" placeholder="(85) 91234-5678" required/>
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input type="email" name="email" placeholder="seuemail@email.com" required/>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </section> 
    )
}