// File: components/CarDetailsModal.jsx

import React from "react";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";
import { FaTimes, FaCar } from "react-icons/fa6";

/**
 * CarDetailsModal Component
 * Renders a full-featured modal for displaying detailed car specifications and links.
 * * @param {object} props
 * @param {object} props.car - The car data object to display.
 * @param {function} props.onClose - Function to close the modal.
 */
const CarDetailsModal = ({ car, onClose }) => {
    // If the car data is somehow missing, render nothing
    if (!car) return null;

    // Determine the Price color based on the previous logic (assuming 'Crore' text implies higher price)
    const priceColor = car.price?.includes("Crore")
        ? "text-yellow-400"
        : "text-cyan-400";
        
    // --- Utility Component: Spec Item (Reusable) ---
    const SpecItem = ({ icon, label, value }) => (
        <div className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-700/50">
            {/* icon is already a React element passed from CarGallery's useMemo */}
            <div className="text-xl text-cyan-400 min-w-[24px] flex justify-center items-center">{icon}</div> 
            <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</p>
                <p className="text-sm font-bold text-white">{value}</p>
            </div>
        </div>
    );
    
    // --- Main Modal Structure ---
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-cyan-500/30 transform transition-transform duration-300 scale-100 border border-cyan-700/50 text-white"
                onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-red-600/80 text-white p-2 rounded-full hover:bg-red-700 transition z-10 shadow-lg ring-2 ring-white/20"
                    aria-label="Close modal"
                >
                    <FaTimes size={16} />
                </button>
                
                {/* Image Section */}
                <div className="relative">
                    <img
                        src={car.image}
                        alt={car.title || "Car"}
                        className="w-full h-80 object-cover object-center"
                        loading="eager" // Important image, load it immediately
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 md:p-8">
                    
                    {/* Title and Price Info */}
                    <h2 className="text-3xl font-extrabold mb-2 text-cyan-300 border-b border-gray-700 pb-2">
                        {car.title}
                    </h2>
                    <div className="flex flex-wrap justify-between items-baseline mb-4">
                        <span className={`text-4xl font-black ${priceColor}`}>{car.price}</span>
                        <div className="text-sm font-medium text-gray-400 mt-2 sm:mt-0">
                            <span>Mileage: {car.mileage || 'N/A'}</span>
                            <span className="mx-2">|</span>
                            <span>Fuel Type: {car.fuel || 'N/A'}</span>
                        </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-base mb-6 border-b border-gray-700 pb-4 leading-relaxed">
                        {car.description || 'No detailed description available for this vehicle.'}
                    </p>
                    
                    {/* Key Features */}
                    {car.keyFeatures && car.keyFeatures.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-3 border-b border-gray-700/50 pb-2">Key Highlights</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-300 list-none pl-0">
                                {car.keyFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span className="text-cyan-400 mt-1">●</span>
                                        <span className="flex-1">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {/* Specifications Grid */}
                    {car.specs && car.specs.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-3 border-b border-gray-700/50 pb-2">Technical Specs</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {car.specs.map((spec, i) => (
                                    <SpecItem 
                                        key={i} 
                                        icon={spec.icon} 
                                        label={spec.label} 
                                        value={spec.value} 
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        
                        {/* 1. External Link Button (Visit Official Site) */}
                        {car.externalLink ? (
                            <a 
                                href={car.externalLink}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                onClick={onClose} 
                                className="flex-1 flex items-center justify-center px-4 py-3 rounded-full bg-yellow-600 text-white font-bold hover:bg-yellow-500 transition text-lg shadow-xl shadow-yellow-700/50 min-h-[48px]"
                            >
                                Visit Official Site <FaCar className="inline ml-2" size={16} />
                            </a>
                        ) : (
                            // Placeholder/Disabled state if no external link exists
                            <button
                                disabled
                                className="flex-1 flex items-center justify-center px-4 py-3 rounded-full bg-gray-600 text-gray-400 font-bold text-lg cursor-not-allowed opacity-50 min-h-[48px]"
                            >
                                Official Site N/A
                            </button>
                        )}
                        
                        {/* 2. Internal Navigation Link (Enquire Now) */}
                        <Link 
                            href="/contact" // Assuming /contact is the enquiry page
                            passHref 
                            className="flex-1"
                            onClick={onClose} // Close the modal before navigating
                        >
                            <a 
                                className="w-full flex items-center justify-center px-4 py-3 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition text-lg shadow-xl shadow-cyan-700/50 min-h-[48px]"
                            >
                                Enquire Now <RxArrowRight className="inline ml-2" size={16} />
                            </a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CarDetailsModal;