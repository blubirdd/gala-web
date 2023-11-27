import React from 'react'

const Nav = () => {
  return (
    <header className="flex flex-wrap absolute overflow-hidden bg-emerald-700  sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4" data-aos="fade-down">
    <nav className="nav max-w-[85rem] w-full mx-auto px-4 sm:flex items-start sm:justify-between" aria-label="Global">
      <div className="flex items-center justify-between">
        <img src="./galaLogo.svg" className="absolute w-14 h-12 top-2 md:top-0 md:bottom-4" alt="" />
        <a className="flex-none text-lg md:text-xl font-extrabold ps-14 text-slate-200" href="/">A Philippine wildlife adventure</a>
        <div className="sm:hidden">
          <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg bg-teal-300 bg-opacity-0 text-slate-200 shadow-sm disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
            <svg className="hs-collapse-open:block hidden flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
      </div>
      <div id="navbar-with-collapse" className="hidden basis-full grow sm:block">
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <a className="text-lg font-bold text-neutral-100 hover:text-orange-200" href="#about" aria-current="page">About</a>
          <a className="text-lg font-bold text-neutral-100  hover:text-orange-200" href="#environment" aria-current="page">Environment</a>
          <a className="text-lg font-bold text-neutral-100 hover:text-orange-200" href="#animals" aria-current="page">Animals</a>
          <a className="text-lg font-bold text-orange-300 hover:text-orange-200 border-l-2 ps-4 " target='_blank' href="https://github.com/blubirdd/GALA" aria-current="page">
            Download <i class="fa-solid fa-arrow-up-right-from-square"></i> 
            </a>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Nav