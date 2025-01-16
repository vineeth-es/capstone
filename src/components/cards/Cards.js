import './Cards.css';
import Swal from 'sweetalert2';

const handleOrder = (id) => {
  console.log("id is clicked", id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, order it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "orderd!",
        text: "Your order has been processing.",
        icon: "success"
      });
    }
  });
}

function Cards({id, title, price, image, description }) {
  return (
    <section className="cards">
      <img className="cardImg" src={image} alt='card food' />
      <div className='itemdetails'><span className='itemname'>{title}</span><span className='price'>{price}</span></div>
      <p className="cardsDesc">{description}</p>
      {/* <div className='oad'><span>Order Now</span><img src={basket} alt='basket' width='24px' /></div> */}
      <button className="btn pd16" onClick={() => handleOrder(id)}>Order Now</button>
    </section>
  );
}

export default Cards;
