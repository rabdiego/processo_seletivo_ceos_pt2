import style from "../../styles/FormSent.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <section className={style.formsent}>
            <div className={style.msgbox}>
                <div className={style.formmsg}>
                    <p>
                        Formulario enviado com sucesso!
                    </p>
                    <a>
                        Em breve entraremos em contato
                    </a>
                </div>
                <Link href="../"><button className={style.backbttn}>Voltar</button></Link>
            </div>
        </section>
    )
}