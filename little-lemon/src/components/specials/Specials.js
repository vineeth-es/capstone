import './Specials.css';

import Cards from '../cards/Cards';

function Specials() {
  return (
    <section className="specials">
      <section className='title'>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </section>
      <section className='cardsSec'>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </section>
    </section>
  );
}

export default Specials;
