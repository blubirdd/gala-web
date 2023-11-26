import React from 'react'

const EnvironmentCard = ({ imgURL, name, description }) => {
    const cardStyle = {
      backgroundImage: `url(${imgURL})`,
    };
  
    return (
      <div className="card-border relative lg:w-64 lg:h-[35rem] z-9 pointer-events-none">
        <div
          style={cardStyle}
          className="card bg-cover relative flex items-end rounded-lg w-full h-full text-white cursor-pointer
           overflow-hidden z-10 pointer-events-auto"
        >
          <div className="content relative flex flex-col items-center w-full p-4 z-10">
            <h2 className="title w-full font-extrabold text-1.6rem z-2 mb-4">{name}</h2>
            <p className="text text-1rem leading-1.8rem z-2">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default EnvironmentCard;