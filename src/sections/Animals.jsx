import React from 'react';
import AnimalCard from "../components/AnimalCard.jsx";
const Animals = () => {
	return (
		<>
			<div className="animals mx-auto">
				<h1 className="text-center text-teal-700 text-5xl font-bold p-4">Discover different kinds of animals</h1>

				<div className="classification text-center mx-auto">
					<div class="inline-flex rounded-lg shadow-sm">
						<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm">
							All
						</button>
						<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm">
							Mammal
						</button>
						<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm">
							Bird
						</button>
						<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm">
							Reptile
						</button>
						<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm">
							Aquatic
						</button>
					</div>
				</div>

				<div className="max-w-screen-lg mx-auto p-4 my-4 sm:px-6 lg:px-4 lg:py-6 rounded-3xl">
					<AnimalCard
							imgURL="https://upload.wikimedia.org/wikipedia/commons/0/0b/Bubalus_mindorensis_by_Gregg_Yan_01.jpg"
							name="Tamaraw"
							scientificName="Bubalus"
							description="A river is a ribbon-like body of water that flows downhill from the force of gravity.
							A river can be wide and deep, or shallow enough for a person to wade across. "
						/>
				</div>

			</div>


		</>
	);
};

export default Animals;
