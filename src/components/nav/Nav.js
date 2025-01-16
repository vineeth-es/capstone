import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import  ham from '../../assets/icon _hamburger menu.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/">About</Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/">Menu</Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/">Reservations</Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/">Order Online</Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/">Login</Link>
          </li>
        </ul>
        <img src={ham} alt='mobile menu' className="hamburger" onClick={toggleMenu} />
      </nav>

      <nav className={`nav-mobile ${isOpen ? 'active' : ''}`}>
        <ul className="nav-mobile-ul">
          <li className="nav-mobile-li">
            <Link className="nav-mobile-link" to="/">Home</Link>
          </li>
          <li className="nav-mobile-li">
            <Link className="nav-mobile-link" to="/">About</Link>
          </li>
          <li className="nav-mobile-li">
            <Link className="nav-mobile-link" to="/">Menu</Link>
          </li>
          <li className="nav-mobile-li">
            <Link className="nav-mobile-link" to="/">Reservations</Link>
          </li>
          <li className="nav-mobile-li">
            <Link className="nav-mobile-link" to="/">Order Online</Link>
          </li>
          <li className="nav-mobile-li">
            <Link className="nav-mobile-link" to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;