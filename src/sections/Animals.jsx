import React from 'react';
import { useState } from 'react';
import { animalData } from "../constants";
import AnimalCard from "../components/AnimalCard.jsx";
import AnimalFilter from '../components/AnimalFilter.jsx';

const Animals = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClassification, setSelectedClassification] = useState('All');

  const handleClassificationChange = (classification) => {
    setSelectedClassification(classification);
    setCurrentPage(1);
  };

  const filteredAnimals = selectedClassification === 'All'
    ? animalData
    : animalData.filter(animal => animal.classification === selectedClassification);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAnimals.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="custom-shape-divider-top-1700920118">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="animals mx-auto bg-gray-100 pt-10 pb-10 overflow-x-hidden" >

        <h1 className="text-center text-teal-700 text-4xl md:text-5xl font-normal p-4 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.3)]" data-aos="fade-down">Discover different kinds of animals</h1>

        <AnimalFilter
          selectedClassification={selectedClassification}
          onClassificationChange={handleClassificationChange}
        />

        <div className="md:max-w-screen-lg mx-auto p-4 my-4 sm:px-6 lg:px-4 lg:py-6 rounded-3xl">
          {currentItems.map(animal => (
            <AnimalCard
              key={animal.name}
              imgURL={animal.imgURL}
              name={animal.name}
              scientificName={animal.scientificName}
              description={animal.description}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-4">
          {Array.from({ length: Math.ceil(filteredAnimals.length / itemsPerPage) }).map((_, index) => (
            <a key={index} href="#animals">
              <button
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-teal-500 text-white' : 'bg-gray-300 hover:bg-teal-500 text-white'}`}
              >
                {index + 1}
              </button>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Animals;