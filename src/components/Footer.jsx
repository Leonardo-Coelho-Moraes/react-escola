import Logosite from '../img/logo2.png';
import LogoIntagram from '../img/InstagramLogo.svg';
import LogoFacebook from '../img/FacebookLogo.svg';
import LogoLinkedin from '../img/LinkedinLogo.svg';
import LogoMap from '../img/GlobeHemisphereWest.svg';
import LogoFone from '../img/Phone.svg';
import LogoMail from '../img/EnvelopeSimple.svg';
import styles from './Footer.module.css'




export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className={styles.infosite}>
                    <div className={styles.logositef}>
                        <img src={Logosite} alt="Logo Site" />
                    </div>
                    <div className={styles.contatos}>
                        <div>
                            <a href="#"><img src={LogoMap} alt="Icone Globo terrestre"/></a>
                            <h2><span>Rua Codelândia, 1367</span> <br /> Cafelândia, SP</h2>
                        </div>
                        <div>
                            <a href="#"><img src={LogoFone} alt="Icone Telefone"/></a>
                            <h2>+55 14 9999-9999</h2>
                        </div>
                        <div>
                            <a href="#"><img src={LogoMail} alt="Icone Envelope"/></a>
                            <h2>centropaulasouza@etec.sp.gov.br</h2>
                        </div>
                    </div>
                    <div className={styles.sobre}>
                        <h1>Sobre a Etec Cafelândia</h1>
                        <p>Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy Moreira Martins Aguiar se destaca no ensino médio e técnico, recebendo constantemente menções e congratulações em todo o estado de São Paulo. </p>
                        <div>
                            <a href="#"><img src={LogoIntagram} alt="Icone Instagram" /></a>
                            <a href="#"><img src={LogoFacebook} alt="Icone Facebook" /></a>
                            <a href="#"><img src={LogoLinkedin} alt="Icone Linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.credito}>
                <h3>Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os direitos reservados.</h3>
            </div>
        </footer>
    );
}