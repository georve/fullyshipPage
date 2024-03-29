import React from 'react';
import { Link } from 'react-router-dom';


import QuoteAuthor from '../images/quote-author-01.jpg';
import CardsIllustration from '../images/cards-illustration.svg';
import Features from '../images/features-02.png';

function Section02() {
  return (
    <section data-aos-id-2="">
      <div className="relative max-w-7xl mx-auto">

        {/* Bg */}
        <div className="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-slate-800 pointer-events-none -z-10" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">

            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">

              {/* Content */}
              <div className="md:max-w-lg">

                {/* Copy */}
                <h2 className="h2 text-white mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="100">
                 Fullyship te hace acreedor de una tarjeta internacional con la cual puedes operar en cualquier parte del mundo
                </h2>
                <p className="text-lg text-slate-400 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">
                Con los convenios de banco nacional e internacional, puedes tener acceso a tu dinero en cualquier parte del mundo, 
                solo se cobra una comisión baja por el uso de la tarjeta y también puedes sacar dinero de los cajeros ATM en la 
                moneda local del país. Todo esto con el fin de brindar comodidad al momento de utilizar tu dinero de forma eficiente.
                </p>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <div>                 
                    <Link className="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-sm"  to="/apply">
                      Descarga la aplicación
                      <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                      </Link>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <img
                    className="rounded-full self-start shrink-0 mr-3"
                    src={QuoteAuthor}
                    width="32"
                    height="32"
                    alt="Quote author 01"
                  />
                  <div>
                    <blockquote className="text-slate-400 m-0">
                      “Conocemos muy bien el mercado de las tarjetas y este producto proporciona la velocidad, el modelo de cuenta 
                      flexible y el enfoque API primero que nadie más puede ofrecer. ”
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="md:absolute md:left-[412px] md:top-0 -mb-12 mt-8 md:mt-36 md:mb-0">
                <div className="relative -mx-16 md:mx-0">
                  <img
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                    src={CardsIllustration}
                    width="742"
                    height="742"
                    aria-hidden="true"
                  />
                  <div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]">
                    <img src={Features} className="md:max-w-none md:rotate-[48deg]" width="775" height="450" alt="Feaatures 01" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Section02;
