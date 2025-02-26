import React from 'react';
import { SpecialOffer, Footer, Services, Subscribe, SuperQuality, CustomerReviews, Hero, PopularProducts} from './sections/index.js';
import Nav from './Components/Nav.jsx';



const App = () => {
  return (
    <main className="relative">
       <Nav />
      <section className="wide:padding-r padding-b">
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




{/* <svg width="129" height="29" viewBox="0 0 129 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.0803 6.2V23H86.5123L77.2483 11.624V23H74.1523V6.2H76.7203L85.9843 17.576V6.2H89.0803ZM93.294 10.184H96.294V23H93.294V10.184ZM94.806 8.072C94.262 8.072 93.806 7.904 93.438 7.568C93.07 7.216 92.886 6.784 92.886 6.272C92.886 5.76 93.07 5.336 93.438 5C93.806 4.648 94.262 4.472 94.806 4.472C95.35 4.472 95.806 4.64 96.174 4.976C96.542 5.296 96.726 5.704 96.726 6.2C96.726 6.728 96.542 7.176 96.174 7.544C95.822 7.896 95.366 8.072 94.806 8.072ZM105.463 17.504L103.231 19.616V23H100.231V5.192H103.231V15.944L109.447 10.184H113.047L107.695 15.56L113.551 23H109.903L105.463 17.504ZM126.998 16.664C126.998 16.872 126.982 17.168 126.95 17.552H116.894C117.07 18.496 117.526 19.248 118.262 19.808C119.014 20.352 119.942 20.624 121.046 20.624C122.454 20.624 123.614 20.16 124.526 19.232L126.134 21.08C125.558 21.768 124.83 22.288 123.95 22.64C123.07 22.992 122.078 23.168 120.974 23.168C119.566 23.168 118.326 22.888 117.254 22.328C116.182 21.768 115.35 20.992 114.758 20C114.182 18.992 113.894 17.856 113.894 16.592C113.894 15.344 114.174 14.224 114.734 13.232C115.31 12.224 116.102 11.44 117.11 10.88C118.118 10.32 119.254 10.04 120.518 10.04C121.766 10.04 122.878 10.32 123.854 10.88C124.846 11.424 125.614 12.2 126.158 13.208C126.718 14.2 126.998 15.352 126.998 16.664ZM120.518 12.44C119.558 12.44 118.742 12.728 118.07 13.304C117.414 13.864 117.014 14.616 116.87 15.56H124.142C124.014 14.632 123.622 13.88 122.966 13.304C122.31 12.728 121.494 12.44 120.518 12.44Z" fill="#FF6452"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.6096 9.80468C25.1346 13.2758 14.071 16.112 13.0239 16.1065C10.0114 16.0904 7.19209 13.7015 6.76806 10.8064C6.56893 9.44425 6.60402 7.46928 6.84618 6.41814L7.28659 4.50653L5.67183 6.53232C3.16986 9.67124 0.775395 14.608 0.291439 17.6257C-0.65927 23.552 4.08624 27.46 10.4653 26.0039C12.9937 25.4271 60.9554 4.55665 61.8216 3.65636C62.4835 2.96871 58.9453 3.86726 37.6096 9.80468Z" fill="#FF6452"/>
</svg> */}

