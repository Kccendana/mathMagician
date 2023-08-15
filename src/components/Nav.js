import { Link } from 'react-router-dom';
import logo from '../assets/calc.svg';
import './nav.css';

const Nav = () => (
  <nav className="navbar">
    <img src={logo} alt="logo" className="logo" />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Nav;
