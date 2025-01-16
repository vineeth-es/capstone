import greekSalad from '../assets/greeksalad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';

const recipes = [
    {
        id: 1,
        title: 'Greek salad',
        price: 12.99,
        image: greekSalad,
        description: 'A traditional Greek salad recipe (Horiatiki) will be the perfect accompaniment to your meal. This is the best Greek salad recipe, and it is so easy to make. It is a must-try!'
    },
    {
        id: 2,
        title: 'Bruschetta',
        price: 10.99,
        image: bruschetta,
        description: 'Bruschetta is a classic Italian antipasto (appetizer) that consists of grilled bread slices rubbed with garlic and topped with olive oil and salt.'
    },
    {
        id: 3,
        title: 'Lemon Dessert',
        price: 6.99,
        image: lemonDessert,
        description: 'This comes from grandma’s recipe box. It is a light and fluffy lemon dessert that is perfect for summer. It is a great dessert for a potluck or family gathering.'
    },
];

export default recipes;
