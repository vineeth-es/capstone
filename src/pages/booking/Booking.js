import React, { Suspense } from 'react';

import './Booking.css';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Specials from '../../components/specials/Specials';
import Footer from '../../components/footer/Footer';

function Booking() {
  return (
    <main className="landing">
      <Suspense fallback='Loading...'>
        <Header></Header>
        <Main></Main>
        <Specials></Specials>
        <Footer></Footer>
      </Suspense>
    </main>
  );
}

export default Booking;
