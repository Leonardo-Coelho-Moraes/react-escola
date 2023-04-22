import { Link, NavLink } from 'react-router-dom';
import Logosite from '../img/Logo.png';
import LogoIntagram from '../img/InstagramLogo.svg';
import LogoFacebook from '../img/FacebookLogo.svg';
import LogoLinkedin from '../img/LinkedinLogo.svg';
import { useState } from 'react';


export default function Navbar(){
const [IsMenuActive, setIsMenuActive] = useState(false)
return(
<header>
  <nav className='container'>
    <Link to='/'><img src={Logosite} alt="Logo Site" /></Link>
    <div className='mobile-menu' onClick={() => {!IsMenuActive? setIsMenuActive(true) : setIsMenuActive(false)}}>
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
    </div>
    <ul className={`nav-list ${!IsMenuActive? 'active' : ''}`}>
      <li>
        <NavLink to='/' className={({ isActive })=> (isActive ? 'link active' : 'link')}>Início</NavLink>
      </li>
      <li>
        <NavLink to='cursos' className={({ isActive })=> (isActive ? 'link active' : 'link')}>Cursos</NavLink>
      </li>
      <li>
        <NavLink to='vagas' className={({ isActive })=> (isActive ? 'link active' : 'link')}>Vagas</NavLink>
      </li>
      <li>
        <NavLink to='noticias' className={({ isActive })=> (isActive ? 'link active' : 'link')}>Notícias</NavLink>
      </li>
      <li>
        <NavLink to='contato' className={({ isActive })=> (isActive ? 'link active' : 'link')}>Contato</NavLink>
      </li>
    </ul>
    <div className="socialmediatop">
      <a href="#"><img src={LogoIntagram} alt="Instagram Logo" /></a>
      <a href="#"><img src={LogoFacebook} alt="Facebook Logo" /></a>
      <a href="#"><img src={LogoLinkedin} alt="Linkedin Logo" /></a>
    </div>
  </nav>
</header>
);
}
