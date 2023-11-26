import React from 'react'
import "./index.css"
import '../node_modules/preline/dist/preline.js'
import Nav from './components/Nav.jsx'


import {Hero, About, Environment, Animals, Footer } from "./sections/index.js"

const App = () => {
  return (
    <>
    <main className="content-center relative ">
      <section>
        <Nav/>
      </section>

      <section  className="relative max-w-[1920px] mx-auto">
        <Hero/>
      </section>

      <section className="relative max-w-[1920px] mx-auto">
        <About/>
      </section>

      <section className="relative max-w-[1920px] mx-auto">
        <Environment/>
      </section>

      <section className="relative max-w-[1920px] mx-auto">
        <Animals />
      </section>

      <section className="relative max-w-[1920px] mx-auto">
        <Footer />
      </section>


    </main>
    </>

  )
}

export default App