import { Link, useParams } from 'react-router-dom';
import cursos from '../data';
import curhora from '../img/Sun.svg';
import curpessoa from '../img/User.svg';
import curduracao from '../img/HourglassMedium.svg';
import styles from '../css/CursoSolo.module.css'
export default function CursoSolo() {
  const { cursoName } = useParams();
  const curso = cursos.find((curso) => curso.name === cursoName);
  const { image, name, horario } = curso;

  return (
    <>
      <div className={styles.titulo}>
        <h1><strong>{name}</strong></h1>
      </div>
      <section className='container'>
        <section className={styles.section1}>
          <div className={styles.fotoCurso}><img src={image} alt={name} /></div>
          <div className={styles.sec1conteudo}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae vestibulum iaculis lacus aliquam
              convallis dolor risus. Velit vitae in lectus facilisis arcu tempor. Tempus dolor convallis accumsan nulla
              mi amet. Vulputate risus neque tellus faucibus molestie sem mauris. Semper quis orci scelerisque lectus.
              Leo sollicitudin cursus diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc pellentesque
              libero arcu et leo dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio molestie nec, vulputate
              tellus tellus.</p>
            <div className={styles.espec}>
              <span className={styles.infocurso}>
                <img src={curhora} alt="Logo Sol" />
                <h3>Período: <br /><span className={styles.cursoh}><small>{horario}</small></span></h3>
              </span>
              <span className={styles.infocurso}>
                <img src={curpessoa} alt="Logo Pessoa" />
                <h3>Coordenação:: <br /> <span className={styles.cursoh}><small>Leonardo</small></span></h3>
              </span>
              <span className={styles.infocurso}>
                <img src={curduracao} alt="Logo Ampulheta" />
                <h3>Duração:: <br /><span className={styles.cursoh}><small>{horario}</small></span></h3>
              </span>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.section2}>
        <h2 className='container'>Objetivos gerais</h2>
        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae vestibulum iaculis
          lacus aliquam convallis dolor risus. Velit vitae in lectus facilisis arcu tempor. Tempus dolor convallis
          accumsan nulla mi amet. Vulputate risus neque tellus faucibus molestie sem mauris. Semper quis orci
          scelerisque lectus. Leo sollicitudin cursus diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc
          pellentesque libero arcu et leo dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio molestie nec,
          vulputate tellus tellus.</p>
      </section>
      <section className={styles.section3}>
        <h2 className='container'>Objetivos gerais</h2>
        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae vestibulum iaculis
          lacus aliquam convallis dolor risus. Velit vitae in lectus facilisis arcu tempor. Tempus dolor convallis
          accumsan nulla mi amet. Vulputate risus neque tellus faucibus molestie sem mauris. Semper quis orci
          scelerisque lectus. Leo sollicitudin cursus diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc
          pellentesque libero arcu et leo dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio molestie nec,
          vulputate tellus tellus.</p>
      </section>
    </>
  );
};