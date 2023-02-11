import { Link } from 'react-router-dom';
import styles from '../css/Cursos.module.css';
import cursos from '../data';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';

export default function Cursos() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
      setList(cursos);
      setLoading(false);
   
  },);

  if (loading) {
    return <Loading />;
  }

return (
<section className={styles.section2}>
  <h2>Cursos Técnicos</h2>
  <div className="container">
    <div className={styles.cursos}>
      {list.map((curso) => {
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



