import React, { Suspense } from 'react';

import './About.css';
import Header from '../../components/header/Header';

function About() {
  return (
    <div className="about">
      <Suspense fallback='Loading...'>
        <Header></Header>
        About
      </Suspense>
    </div>
  );
}

export default About;
