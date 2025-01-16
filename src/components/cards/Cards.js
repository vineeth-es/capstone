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
        title: "Ordered!",
        text: "Your order is being processed.",
        icon: "success"
      });
    }
  });
}

function Cards({ id, title, price, image, description }) {
  return (
    <section className="cards" aria-labelledby={`card-title-${id}`}>
      <img className="cardImg" src={image} alt={`${title} image`} />
      <div className="itemdetails">
        <h2 id={`card-title-${id}`} className="itemname">{title}</h2>
        <span className="price">${price}</span>
      </div>
      <p className="cardsDesc">{description}</p>
      <button className="btn pd16" onClick={() => handleOrder(id)} aria-label={`Order ${title}`}>Order Now</button>
    </section>
  );
}

export default Cards;