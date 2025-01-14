import './Nav.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="nav">
      <ul>
        <li><Link className='nav-link' to="/">Home</Link></li>
        <li><Link className='nav-link' to="/about">About</Link></li>
        <li>Menu</li>
        <li><Link className='nav-link' to="/booking">Reservations</Link></li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Nav;
