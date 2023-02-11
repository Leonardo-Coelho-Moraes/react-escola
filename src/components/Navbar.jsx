import { Link, NavLink } from 'react-router-dom';
import Logosite from '../img/Logo.png';
import LogoIntagram from '../img/InstagramLogo.svg';
import LogoFacebook from '../img/FacebookLogo.svg';
import LogoLinkedin from '../img/LinkedinLogo.svg';
class MobileNavbar {
constructor(mobileMenu, navList, navLinks) {
this.mobileMenu = document.querySelector(mobileMenu);
this.navList = document.querySelector(navList);
this.navLinks = document.querySelectorAll(navLinks);
this.activeClass = "active";
this.handleClick = this.handleClick.bind(this);
}
handleClick() {
this.navList.classList.toggle(this.activeClass);
this.mobileMenu.classList.toggle(this.activeClass);
}

addClickEvent() {
this.mobileMenu.addEventListener("click", this.handleClick);
}

init() {
if (this.mobileMenu) {
this.addClickEvent();
}
return this;
}
}

const mobileNavbar = new MobileNavbar(
".mobile-menu",
".nav-list",
".linknav",
);

mobileNavbar.init();


export default function Navbar(){


return(
<header>
  <nav className='container'>
    <Link to='/'><img src={Logosite} alt="Logo Site" /></Link>
    <div className='mobile-menu'>
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
    </div>
    <ul className='nav-list'>
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
