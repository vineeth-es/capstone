import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <>
      <Header></Header>
      <main>
        <div className="confirm">
          <h3>Thank You!!</h3>
          <h4>Your reservation is <span>confirmed!</span></h4>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default ConfirmedBooking;