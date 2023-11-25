import React from 'react';
import '../styles/Hero.css';
const Hero = () => {
  return (
    <>
      <div className="hero-background relative bg-[url('./cover2.png')] bg-no-repeat bg-cover bg-left">

        <div className="inset-0 bg-neutral-950 bg-opacity-60 h-md-[800px]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:py-24">
            <div className="flex justify-center">
            </div>
            <div className="py-12 pt-24 max-w-3xl text-center mx-auto">
              <h1 className="block font-bold text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider">
                <span className="text-emerald-500">Explore</span>, <span className="text-emerald-500">discover</span> and 
                interact with different animals
              </h1>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <p className="mt-3 text-lg text-neutral-100 dark:text-gray-400">Your adventure starts now.</p>
            </div>  
            <div className="flex items-center justify-center">
              <a className="inline-flex justify-center items-center gap-x-3" href="#">
                <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" className="w-25 h-20" alt="Google Play Badge" />
              </a>
              <a className="inline-flex justify-center items-center gap-x-3 text-center bg-sky-600 shadow-lg shadow-transparent  text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-offset-2 w-32 h-14" href="#">
                Watch trailer
              </a>
            </div>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1700894480">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
      </div>


    </>
  );
};

export default Hero;
