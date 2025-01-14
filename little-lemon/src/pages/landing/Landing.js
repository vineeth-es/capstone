import React, { Suspense } from 'react';

import './Landing.css';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Specials from '../../components/specials/Specials';

function Landing() {
  return (
    <div className="landing">
      <Suspense fallback='Loading...'>
        <Header></Header>
        <Hero></Hero>
        <Specials></Specials>
      </Suspense>
    </div>
  );
}

export default Landing;
