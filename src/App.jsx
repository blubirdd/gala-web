import React, { useState, useEffect } from 'react';
import "./index.css"
import '../node_modules/preline/dist/preline.js'
import Nav from './components/Nav.jsx'
import Modal from './components/Modal.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import {Hero, About, Environment, Animals, Footer } from "./sections/index.js"



const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('active-modal');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('active-modal');
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <>
    <main className="content-center relative">
      <section>
        <Nav/>
      </section>

      <section  className="relative max-w-[1920px] mx-auto" id="home">
        <Hero/>
      </section>

      <section className="about-section relative max-w-[1920px] mx-auto" id="about">
        <About onOpenModal={openModal}/>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <section className="relative max-w-[1920px] mx-auto" id="environment">
        <Environment/>
      </section>

      <section className="animals-section relative max-w-[1920px] mx-auto" id="animals">
        <Animals />
      </section>

      <section className="relative max-w-[1920px] mx-auto" id="footer">
        <Footer />
      </section>


    </main>
    </>

  )
}

export default App