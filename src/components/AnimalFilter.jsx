import React from 'react';

const AnimalFilter = ({ selectedClassification, onClassificationChange }) => {
  const classifications = ["All", "Mammals", "Birds", "Reptiles", "Aquatics"];

  const iconMap = {
    "Mammals": "fa-horse",
    "Birds": "fa-crow",
    "Reptiles": "fa-staff-snake",
    "Aquatics": "fa-fish",
  };

  return (
    <div className="classification text-center mx-auto" data-aos="fade-down" data-aos-delay="200"> 
      <div className="grid grid-cols-1 px-4 text-center md:inline-flex md:flex-row rounded-lg shadow-sm">
        {classifications.map(classification => (
          <button
            key={classification}
            type="button"
            className={`py-3 px-2 md:px-12 items-center gap-x-1 rounded-lg md:rounded-none md:first:rounded-s-lg first:ms-0 md:last:rounded-e-lg text-lg md:text-sm font-medium focus:z-10 border
             ${selectedClassification === classification ?
            'bg-emerald-500 text-white' : 'border-emerald-100 bg-emerald-700 text-white hover:bg-emerald-500 shadow-sm'}`}
            onClick={() => onClassificationChange(classification)}
          >
            <i className={`text-orange-100 fa-solid pr-1 ${iconMap[classification]}`}></i> {classification}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimalFilter;
