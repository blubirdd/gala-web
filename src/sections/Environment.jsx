import React from 'react'
import '../styles/EnvironmentCard.css'
import EnvironmentCard from "../components/EnvironmentCard.jsx";

const Environment = () => {
	return (
		<>
			<div className="custom-shape-divider-top-1700898646">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
				</svg>
			</div>
			<div className="environment-cards justify-center p-4 pt-12">
				<h1 className="text-center text-teal-700 text-5xl font-bold pb-6">Explore different environments</h1>
				<div className="container flex flex-wrap justify-center gap-x-2 gap-y-3">

					<EnvironmentCard
						imgURL="https://cdn1.epicgames.com/ue/product/Screenshot/1-1920x1080-cc9fe1fd93afc005d6cd6f414fd904e2.png?resize=1&w=1920"
						name="Village"
						description="A river is a ribbon-like body of water that flows downhill from the force of gravity.
             A river can be wide and deep, or shallow enough for a person to wade across. "
					/>

					<EnvironmentCard
						imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c732ca14341603.5759694916d80.jpg"
						name="River"
						description="A river is a ribbon-like body of water that flows downhill from the force of gravity.
             A river can be wide and deep, or shallow enough for a person to wade across. "
					/>

					<EnvironmentCard
						imgURL="https://i.redd.it/9uqb5hyb37r91.png"
						name="Grassland"
						description="A river is a ribbon-like body of water that flows downhill from the force of gravity.
             A river can be wide and deep, or shallow enough for a person to wade across. "
					/>



					<EnvironmentCard
						imgURL="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8a53c56-6d68-4f1c-bcf3-cde2b4dd026b/dcivobo-95c7e485-fb5a-432e-82bd-a297f7e363c2.png/v1/fill/w_1023,h_578,q_80,strp/swamp_environment__low_poly_model_by_charmainenomnom_dcivobo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc4IiwicGF0aCI6IlwvZlwvZDhhNTNjNTYtNmQ2OC00ZjFjLWJjZjMtY2RlMmI0ZGQwMjZiXC9kY2l2b2JvLTk1YzdlNDg1LWZiNWEtNDMyZS04MmJkLWEyOTdmN2UzNjNjMi5wbmciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8ZttlLHY6sSO1cH7z4Vvw_svuLXczs8sgxtl5WBj0rI"
						name="Swamp"
						description="A river is a ribbon-like body of water that flows downhill from the force of gravity.
             A river can be wide and deep, or shallow enough for a person to wade across. "
					/>

					<EnvironmentCard
						imgURL="https://png.pngtree.com/background/20230522/original/pngtree-an-animated-low-poly-character-through-a-forest-picture-image_2692387.jpg"
						name="Rainforest"
						description="A river is a ribbon-like body of water that flows downhill from the force of gravity.
             A river can be wide and deep, or shallow enough for a person to wade across. "
					/>

				</div>
			</div>
		</>
	)
}

export default Environment