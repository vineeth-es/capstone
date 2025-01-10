import './Hero.css';
import heroImg from '../../assets/restauranfood.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className='desc'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediteranean Restaurant, focused on traditional recipies served with a mordern twist.
        </p>
      </div>
      <img className='heroImg' src={heroImg} alt='hero'/>
    </section>
  );
}

export default Hero;
