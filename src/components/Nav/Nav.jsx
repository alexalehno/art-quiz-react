import classes from './Nav.module.scss';
import NavItem from "./NavItem/NavItem";
import { importAll } from '../../funcs/funcs';
import { useParams } from 'react-router-dom';


function Nav() {
  const icons = importAll(require.context('./icon', false, /\.(png|jpe?g|svg)$/));
  const { type } = useParams();
  
  const items = [
    {name: 'Home', to: '/'},
    {name: 'Categories', to: `/${type}`},
    {name: 'Score', to: `/${type}/score`},
  ];

  return (
    <nav className= {classes.nav}>
      <ul className={classes.navList}>
        {items.map((item, i) =>  
          <NavItem 
            to={item.to}
            name={item.name}
            src={icons[i]}
            cls={['hoverOpacity']}
            key={i}
          />
          )
        }
      </ul>
  </nav>
  );
}

export default Nav;