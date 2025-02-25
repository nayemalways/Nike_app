import React from 'react';
import { SpecialOffer, Footer, Services, Subscribe, SuperQuality, CustomerReviews, Hero, PopularProducts} from './sections/index.js';
import Nav from './Components/Nav.jsx';



const App = () => {
  return (
    <main className="relative">
       <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
      </section>

      <section className="padding">
        <PopularProducts />      
      </section>

      <section className="padding">
        <SuperQuality />    
      </section>

      <section className="padding padding-x py-10">
        <Services />     
      </section>

      <section className="padding">
           <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
           <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 width-full">
           <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black text-white">
           <Footer />
      </section>
    </main>
  );
};

export default App;