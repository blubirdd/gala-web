import React from 'react'

const EnvironmentCard = ({ imgURL, name, description, 'data-aos': dataAOS, 'data-aos-delay': dataAOSDelay }) => {
    const cardStyle = {
      backgroundImage: `url(${imgURL})`,
    };
  
    return (
      <div className="card-border relative lg:w-64 lg:h-[30rem] z-9 pointer-events-none" data-aos={dataAOS} data-aos-delay={dataAOSDelay}>
        <div
          style={cardStyle}
          className="card bg-cover bg-center relative flex items-end rounded-lg w-full h-full cursor-pointer
           overflow-hidden z-10 pointer-events-auto shadow-md shadow-slate-700"
        >
          <div className="content relative flex flex-col items-center w-full p-4 z-10">
            <h2 className="title text-neutral-200 w-full font-extrabold text-2xl z-10 mb-4 drop-shadow-[0_5.2px_5.2px_rgba(0,0,0,1)]" >{name}</h2>
            <p className="text-slate-100 leading-tight text-justify break-all z-10">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default EnvironmentCard;