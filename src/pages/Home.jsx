import React from 'react';

import Header from '../partials/Header';
import Hero from '../partials/Hero';
import Section01 from '../partials/Section01';
import Section02 from '../partials/Section02';
import Section03 from '../partials/Section03';
import Section04 from '../partials/Section04';
import Section05 from '../partials/Section05';
import Section06 from '../partials/Section06';
import Section07 from '../partials/Section07';
import Faqs from '../partials/Faqs';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Hero />
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
        <Section07 />
        <Faqs />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;