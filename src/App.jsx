import React from 'react'
import "./index.css"
import '../node_modules/preline/dist/preline.js'
import Nav from './components/Nav.jsx'


import {Hero, About, Environment, Animals, Footer } from "./sections/index.js"

const App = () => {
  return (
    <>
    <main className="content-center relative">
      <section>
        <Nav/>
      </section>

      <section  className="relative">
        <Hero/>
      </section>

      <section className="about relative max-w-[100rem] mx-auto">
        <About/>
      </section>

      <section className="relative max-w-[100rem] mx-auto">
        <Environment/>
      </section>

      <section className="relative max-w-[100rem] mx-auto">
        <Animals />
      </section>

    </main>
    </>

  )
}

export default App