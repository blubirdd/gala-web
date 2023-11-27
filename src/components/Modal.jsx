import React from 'react'
import Gallery from './Gallery.jsx'

const Modal = ({isOpen, onClose}) => {

    if (!isOpen) {
        return null;
      }

    return (
        <div className="overlay fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="overlay absolute inset-0 bg-black bg-opacity-90" onClick={onClose} data-aos="fade"></div>
            <div className="bg-neutral-100  w-full md:w-3/4 h-[300px] md:h-[600px] p-4 z-10" data-aos="flip-right">
                <Gallery />
            </div>
        </div>
        </div>
    )
    }

export default Modal