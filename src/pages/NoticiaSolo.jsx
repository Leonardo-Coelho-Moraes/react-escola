import { Link, useParams } from 'react-router-dom';
import noticias from '../data-noticias';
import Noticia from '../components/NoticiasArt'
import styles from '../css/NoticiaSolo.module.css'
export default function NoticiaSolo() {
  const { noticiaTitulo } = useParams();
  const noticia = noticias.find((noticia) => noticia.titulo === noticiaTitulo);
  const { titulo, data } = noticia;

  return (
    <>
      <div className={styles.compartilhar}>
        <a href="#">
          <h3>compartilhar no facebook</h3>
        </a>
        <a href="#">
          <h3>compartilhar no instagram</h3>
        </a>
        <a href="#">
          <h3>compartilhar no linkedin</h3>
        </a>
      </div>
      <div className='container'>
        <div className={styles.conteudo}>
          <section className={styles.sec1}>
            <div className={styles.banner}>
              <h1>Banner</h1>
            </div>
            <h2>{titulo}</h2>
            <h4 className={styles.data}>{data}</h4>
            <p>Hey!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi nulla dicta quo, provident quaerat
              quidem modi error nostrum a vitae reprehenderit voluptate blanditiis deserunt recusandae alias omnis vero.
              Et!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              Porro expedita nihil commodi odit at.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi nulla dicta quo, provident quaerat
              quidem modi error nostrum a vitae reprehenderit voluptate blanditiis deserunt recusandae alias omnis vero.
              Et!
              <br />
              <br />
              Thanks!</p>
          </section>
          <aside className={styles.aside}>
            <h2>Outras notícias</h2>
            <p>{noticias[0].titulo}</p>
            <p>{noticias[1].titulo}</p>
            <p>{noticias[2].titulo}</p>
            <p>{noticias[3].titulo}</p>
            <p>{noticias[4].titulo}</p>
          </aside>
        </div>
        <Noticia />
      </div>
    </>
  );
};