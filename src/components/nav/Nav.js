import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      {/* <FontAwesomeIcon icon={faBars} className="hamburger" onClick={toggleMenu} /> */}
      <ul className={`nav-ul ${isOpen ? 'active' : ''}`}>
        <li className="nav-li">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/menu">Menu</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/reservations">Reservations</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/order-online">Order Online</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;