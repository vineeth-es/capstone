import Nav from '../../components/nav/Nav';
import './Header.css';

import logo from '../../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <img className='header-logo' src={logo} alt="Company Logo" onClick={handleLogoClick} role="button" tabIndex="0" />
      <Nav />
    </header>
  );
}

export default Header;
