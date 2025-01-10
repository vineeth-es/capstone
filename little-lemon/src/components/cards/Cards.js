import './Cards.css';

import img1 from '../../assets/greeksalad.jpg'

function Cards() {
  return (
    <section className="cards">
      <img className='cardImg' src={img1} alt='card food'/>
      <div><span>Greek Salad</span><span>$12.99</span></div>
      <p>The owners of the Little Lemon Restaurant have approved the wireframes for their website and want you to turn these wireframes into a high-fidelity design or a design that closely resembles the final product using their brand style guide.</p>
    </section>
  );
}

export default Cards;
