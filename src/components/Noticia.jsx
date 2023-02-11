import style from '../css/Noticias.module.css'
import { Link } from 'react-router-dom';
import noticias from '../data-noticias';
export default function Noticia(){
return(  
<>
<Link to={`/noticias/${noticias[0].titulo}`} className={style.noticia}>
<span className={style.legendanot}>
    <p>{noticias[0].titulo}</p>
    <span className={style.datanot}>{noticias[0].data}</span>
</span>
</Link>
<Link to={`/noticias/${noticias[1].titulo}`} className={style.noticia}>
<span className={style.legendanot}>
    <p>{noticias[1].titulo}</p>
    <span className={style.datanot}>{noticias[1].data}</span>
</span>
</Link>
<Link to={`/noticias/${noticias[2].titulo}`} className={style.noticia}>
<span className={style.legendanot}>
    <p>{noticias[2].titulo}</p>
    <span className={style.datanot}>{noticias[2].data}</span>
</span>
</Link>
</>
);
}
