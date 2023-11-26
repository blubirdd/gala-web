import React from 'react';
import { useState } from 'react';
import { animalData } from "../constants";
import AnimalCard from "../components/AnimalCard.jsx";
import AnimalFilter from '../components/AnimalFilter.jsx';

const Animals = () => {
  const [selectedClassification, setSelectedClassification] = useState("All");

  const handleClassificationChange = (classification) => {
    setSelectedClassification(classification);
  };

  const filteredAnimals = selectedClassification === "All"
    ? animalData
    : animalData.filter(animal => animal.classification === selectedClassification);

  return (
    <>
      <div class="custom-shape-divider-top-1700920118">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="animals mx-auto bg-gray-100 pt-10">

        <h1 className="text-center text-teal-700 text-4xl md:text-5xl font-bold p-4">Discover different kinds of animals</h1>

        <AnimalFilter
          selectedClassification={selectedClassification}
          onClassificationChange={handleClassificationChange}
        />

        <div className="md:max-w-screen-lg mx-auto p-4 my-4 sm:px-6 lg:px-4 lg:py-6 rounded-3xl">
          {filteredAnimals.map(animal => (
            <AnimalCard
              key={animal.name}
              imgURL={animal.imgURL}
              name={animal.name}
              scientificName={animal.scientificName}
              description={animal.description}
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default Animals;