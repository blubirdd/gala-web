import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero-background relative bg-[url('./cover2.png')] bg-no-repeat bg-cover bg-left">
        <div className="inset-0 bg-slate-950 bg-opacity-60 h-[600px] md:h-[650px]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:py-24">
            <div className="flex justify-center">
            </div>
            <div className="py-6 pt-32 md:pt-24 max-w-4xl text-center mx-auto">
              <h1 className="hero-text block font-normal text-neutral-50 text-4xl md:text-7xl tracking-wider drop-shadow-[0_3.2px_3.2px_rgba(0,0,0,0.8)]" data-aos="fade-down">
                <span className="text-orange-200">Explore</span>, <span className="text-orange-200">discover</span> and 
                interact with the  <span className="text-orange-200">wildlife</span> of the Philippines
              </h1>
            </div>

            <div className="max-w-3xl text-center mx-auto" data-aos="fade-down" >
              <p className="mt-3 text-lg text-neutral-100 dark:text-gray-400">Your adventure starts now.</p>
            </div>  
            <div className="flex flex-col md:flex-row items-center justify-center "data-aos="fade-down" >
              <a className="inline-flex justify-center items-center gap-x-3 mb-3 sm:mb-0 hover:scale-105 duration-100" target='_blank' href="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=en&gl=US">
                <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" className="w-25 h-20" alt="Google Play Badge" />
              </a>
              {/* <a className="inline-flex justify-center items-center text-center bg-sky-600 shadow-lg shadow-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2 w-32 h-14 hover:scale-105 duration-100" href="#">
              <i className="text-1xl pr-1 fa-solid fa-play"></i> Watch trailer
              </a> */}
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1700894480">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
