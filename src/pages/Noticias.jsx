import { Link } from 'react-router-dom';
import styles from '../css/Noticias.module.css'
import noticias from '../data-noticias'
export default function Noticias(){
    return(
        < div className="container">
            <div className={styles.noticias}>
            {noticias.map((noticia) => {
      return (
        <Link to={`/noticias/${noticia.titulo}`} className={styles.noticia}>
        <span className={styles.legendanot}>
            <p>{noticia.titulo}</p>
            <span className={styles.datanot}>{noticia.data}</span>
        </span>
        </Link>
      );
      })}
               

            </div>
        </div>
    );
}