import React from 'react'
import AboutImage from '../components/AboutImage'
const About = ({ onOpenModal }) => {

	return (
		<>
			<div className="about relative pb-6 bg-gray-100 mx-auto z-[0] overflow-x-hidden">
				<div className="custom-shape-divider-top-1700918840">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
					</svg>
				</div>
				<h1 className="text-center text-teal-700 text-4xl md:text-5xl font-normal pt-8 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.3)]" data-aos="fade-down" data-aos-delay="500" data-aos-offset="-300">About the island of GALA</h1>
				<div className="px-4 my-4 sm:px-6 lg:px-4 lg:py-6 mx-auto">
					<div className="relative grid grid-cols-1 lg:grid-cols-2 md:items-center md:gap-6" >
						<div className="image-gallery" data-aos="fade-right" >
							<AboutImage onOpenModal={onOpenModal} />
						</div>
						<div className="mt-5">
							<div className="space-y-6 pr-0 md:pr-8 md:ps-6 lg:pr-12"  data-aos="fade-left" data-aos-delay="300">
									<h2 className="font-bold text-3xl lg:text-4xl text-gray-600">
									An exciting wildlife adventure
									</h2>
									<p className="text-gray-500 text-xl text-justify font-medium">
										GALA is an immersive role-playing game that invites players to step into the shoes of a young adventurer on the fictional island of GALA. This enchanting island is a sanctuary where all of the Philippines' native animals converge in harmonious coexistence. As the young protagonist, players embark on a quest to explore the island.
										<br /><br />
										Equipped with a camera, a bag and a book journal, capture breathtaking snapshots of the island's unique creatures,  Engage with people and animals, unraveling the stories of the Philippines native animals, and work to protect them from looming threats such as habitat destruction and relocation.
									</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="custom-shape-divider-bottom-1700920154">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 125" preserveAspectRatio="none">
					<path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z" className="shape-fill"></path>
				</svg>
			</div>
		</>
	)
}

export default About