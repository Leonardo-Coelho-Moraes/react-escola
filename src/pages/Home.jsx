
import styles from '../css/Home.module.css'
import Noticias from '../components/NoticiasArt'
import  React, {useState} from "react";
import Cursos from './Cursos';
import { Link } from 'react-router-dom';
import vagas from '../data-vagas';
export default function Home(){
    const [vaga, setvagaimg] = useState(vagas[0].image);
    const handleButtonMouseEnter = vaga => {
        setvagaimg(vaga);
      };
    return(
        <React.Fragment>
            <section className={styles.section1}>

                <div className='container'>
                    <h1>Helcy Moreira Martins Aguiar</h1>
                    <p>Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy Moreira Martins Aguiar se
                        destaca no ensino médio e técnico, recebendo constantemente menções e congratulações em todo o
                        estado de São Paulo.</p>
                </div>
                <div className={styles.comp}>
                    <span className={styles.span1}>Mantida pelo governo do Estado de São Paulo, os cursos oferecidos –
                        além de qualidade ímpar – são totalmente gratuitos, levando para toda a população um ensino de
                        qualidade e a oportunidade deaprender uma profissão.</span>
                    <span className={styles.span2}>Contando com um corpo docente extremamente qualificado e estrutura
                        física moderna, os cursosoferecidos nesta unidade se destacam pelaqualidade de ensino, onde o
                        aluno realmente aprende conteúdos relevantes, de maneira fácil e didática. </span>
                    <span className={styles.span3}>Baseado em uma didática prática, os alunos são envolvidos em
                        conteúdos que abordam as diversas realidades do mercado, formando assim mão de obra qualificada
                        e proporcionando uma experiência diferenciada para o aluno.</span>
                </div>
            </section>
            <Cursos />
            <section className={styles.section3}>
                <div className={styles.empregofoto} id='empregofoto'style={{ backgroundColor: vaga }} >
                    <h1>Estágios e empregos</h1>
                </div>
                <div  className={styles.empregos}>
                    <div onMouseEnter={() => handleButtonMouseEnter(vagas[0].image)} >
                        <h3 >{vagas[0].titulo}</h3>
                        <span>{vagas[0].data}</span>
                        <Link to='/'>Mais mais sobre a vaga</Link>
                    </div>
                <div onMouseEnter={() => handleButtonMouseEnter(vagas[1].image)} >
                    <h3 >{vagas[1].titulo}</h3>
                    <span>{vagas[1].data}</span>
                    <Link to='/'>Mais mais sobre a vaga</Link>
                </div>
                    <div onMouseEnter={() => handleButtonMouseEnter(vagas[2].image)}>
                        <h3 >{vagas[2].titulo}</h3>
                        <span>{vagas[2].data}</span>
                        <Link to='/'>Mais mais sobre a vaga</Link>
                    </div>
                </div>
            </section>
            <Noticias />

        </React.Fragment>
    );
    
};
