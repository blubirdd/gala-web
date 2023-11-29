import React from 'react'
import '../styles/EnvironmentCard.css'
import EnvironmentCard from "../components/EnvironmentCard.jsx";

const Environment = () => {
	return (
		<>
			<div className="custom-shape-divider-top-1700920118">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z" className="shape-fill"></path>
				</svg>
			</div>


			<div className="environment bg-gray-100 pb-10">
				<div className="environment-cards p-4 pt-12">
					<h1 className="text-center text-teal-700 text-4xl md:text-5xl font-normal pb-6 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.3)]" >Explore different environments</h1>
					<div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mx-auto">

						<EnvironmentCard
							imgURL="./village.jpg"
							name="Villages"
							description="The village represents a human-modified environment, showcasing the intersection between nature and culture. Explore the symbiotic relationship between villagers and their surroundings."
							data-aos="fade-right" data-aos-delay="0"
						/>

						<EnvironmentCard
							imgURL="./river.jpg"
							name="Rivers"
							description="Rivers serve as vital corridors of biodiversity. Learn the interdependence of aquatic and terrestrial life. and the impact of human activities on river health."
							data-aos="fade-right" data-aos-delay="300"
						/>

						<EnvironmentCard
							imgURL="./grassland.jpg"
							name="Grasslands"
							description="Grasslands are generally open and continuous, fairly flat areas of grass. They are often located between temperate forests at high latitudes and deserts at subtropical latitudes. "
							data-aos="fade-right" data-aos-delay="600"
						/>

						<EnvironmentCard
							imgURL="./swamp.jpg"
							name="Swamps"
							description="The swamp, with its murky waters and labyrinthine network of mangrove roots, provides the perfect habitat for  crocodiles."
							data-aos="fade-right" data-aos-delay="900"
						/>

						<EnvironmentCard
							imgURL="./rainforest.jpg"
							name="Rainforests"
							description="Rainforests are biodiversity hotspots with immense ecological value. Explore the layers of the rainforest, from the forest floor to the canopy, and relationships between plants, animals, and microorganisms. "
							data-aos="fade-right" data-aos-delay="1200"
						/>

					</div>
				</div>
			</div>
			<div className="custom-shape-divider-bottom-1700920154">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z" className="shape-fill"></path>
				</svg>
			</div>
		</>
	)
}

export default Environment