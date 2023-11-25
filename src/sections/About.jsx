import React from 'react'

const About = () => {
	return (
		<>
			<div className="container relative pb-24">
				<h1 className="text-center text-teal-700 text-5xl font-bold pt-8">About the island of GALA</h1>
				<div className="max-w-[85rem]px-4 my-4 sm:px-6 lg:px-4 lg:py-6 mx-auto">
					<div className="md:grid md:grid-cols-2 md:items-center md:gap-6">
						<div>
							<img className="h-1/2 object-cover object-left border-[0.5rem] border-gray-20000" src="./about.png" alt="Image Description" />
						</div>
						<div className="mt-5">
							<div className="space-y-6 sm:space-y-8">
								<div className="space-y-1 md:space-y-2">
									<h2 className="font-bold text-3xl lg:text-4xl text-teal-800">
										One of a kind adventure
									</h2>
									<p className="text-gray-500 text-xl">
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="custom-shape-divider-bottom-1700898736">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    </svg>
</div>
		</>
	)
}

export default About