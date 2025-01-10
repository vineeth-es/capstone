import Nav from '../../components/nav/Nav';
import './Header.css';

import logo from '../../assets/Logo.svg';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt='logo' />
      <Nav></Nav>
    </div>
  );
}

export default Header;