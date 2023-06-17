import classes from './Footer.module.scss';
import logoFooter from './logo-rs_school.svg';
import Logo from '../UI/Logo/Logo';


function Footer() {
  const appDevClasses = [classes.devName, 'hoverOpacity'].join(' ');

  return (
    <footer className={classes.footer}>
      <Logo 
        cls={[classes.logoImg, 'hoverOpacity']}
        src={logoFooter} 
        href='https://rs.school/js/'
        target='rsschool' 
      />

      <a className={appDevClasses} href="https://www.linkedin.com/in/aleksandr-alehno-889bb0213/" target="linkedin">
        App developer: Aleksandr
      </a>

      <time>2023</time>
    </footer>
  );
}

export default Footer;
