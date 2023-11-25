import React from 'react'

const AnimalCard = ({ imgURL, name, scientificName, description }) => {

	return (
		<div className="flex flex-col sm:flex-row bg-emerald-50 border shadow-sm rounded-xl mb-2">
			<img
			  src={imgURL}
				className="rounded-t-xl sm:rounded-t-none md:rounded-l-xl w-full sm:max-w-md h-auto"
				alt="Image"
			/>
			<div className="p-4 md:p-5">
				<h3 className="text-3xl font-bold text-emerald-950 dark:text-white">
					{name}
				</h3>
				<p className="text-lg font-bold text-orange-300 italic">
					{scientificName}
				</p>
				<p className="mt-1 text-gray-500 dark:text-gray-400 text-justify">
					{description}
				</p>
			</div>
		</div>
	)
}

export default AnimalCard