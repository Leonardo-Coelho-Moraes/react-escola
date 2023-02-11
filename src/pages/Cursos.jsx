import { Link } from 'react-router-dom';
import styles from '../css/Cursos.module.css';
import cursos from '../data';


export default function Cursos() {
 
return (
<section className={styles.section2}>
  <h2>Cursos Técnicos</h2>
  <div className="container">
    <div className={styles.cursos}>
      {cursos.map((curso) => {
      return (
      <Link to={`/cursos/${curso.name}`} className={styles.curso}><img className={styles.image} src={curso.image}
        alt={curso.name} /><span className={styles.nome}>{curso.name} </span></Link>
      );
    })}
    </div>
  </div>

</section>
);
};



