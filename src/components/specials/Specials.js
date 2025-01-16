import './Specials.css';

import Cards from '../cards/Cards';
import Button from '../../core/components/button/Button';

import recipes from "../../data/Recipes";

function Specials() {
  return (
    <section className="specials">
      <section className='title'>
        <h2 className='title-specials'>This weeks specials!</h2>
        <Button label="Order it"></Button>
      </section>
      <section className='cardsSec'>
      {recipes.map(recipe => (
        <Cards key={recipe.id} id={recipe.id} title={recipe.title} price={recipe.price} image={recipe.image} description={recipe.description}></Cards>
      ))}
      </section>
    </section>
  );
}

export default Specials;
