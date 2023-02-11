import { Link } from "react-router-dom";
import styles from "./Erro.module.css"

export default function Erro(){
return(
<>
    <div className={styles.corpo}>
        <h1 className={styles.titulo}>404</h1>
        <h2 className={styles.sub}>Ops... Página não encontrada
            <br />Verifique se o URL está correto! ;)</h2>
        <Link to='/' className={styles.btnvoltar}>VOLTAR</Link>
    </div>
</>
);
}