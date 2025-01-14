import { useNavigate } from 'react-router-dom';

import './Hero.css';
import heroImg from '../../assets/restauranfood.jpg';
import Button from '../../core/components/button/Button';

function Hero() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/booking');
  }

  return (
    <section className="hero">
      <div className='desc'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediteranean Restaurant, focused on traditional recipies served with a mordern twist.
        </p>
        <Button label="Reserve a Table" click={handleClick}></Button>
      </div>
      <img className='heroImg' src={heroImg} alt='hero' />
    </section>
  );
}

export default Hero;
