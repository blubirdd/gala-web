import React from 'react'
import '../styles/About.css'

const AboutImage = () => {
	return (
		<>
      <div className="about-image group relative w-[20rem] h-[20rem] md:w-[40rem] md:h-[30rem] bg-white mx-auto rounded-lg shadow-2xl">
        <div className="imgBx absolute top-4 left-4 right-4 bg-gray-800 duration-500 z-10 bottom-12 group-hover:bottom-14">
            <img src="./about.png" alt="image" className="absolute top-0 left-0 w-full h-full object-cover"/>
        </div>
        <div className="details absolute bottom-3 left-1/2 transform -translate-x-1/2">
            <h2 className="m-0 p-0 font-semibold text-lg text-gray-700 uppercase underline">View Gallery</h2>
        </div>
      </div>
		</>
	)
}

export default AboutImage