"use client";
import React, { useState, useMemo, useEffect } from "react";
import { RxArrowRight } from "react-icons/rx";
import { FaTimes, FaCar, FaGears, FaRoad, FaGaugeHigh } from "react-icons/fa6";
import Link from "next/link"; // Link is used for navigation

// --- Fixed Car Data ---

const DETAILED_CARS_DATA = [
    {
        id: 1,
        title: "Lamborghini Aventador SVJ",
        price: "₹ 8.5 Crore",
        image: "https://i.ibb.co/NgjyPTvV/1753940448036.jpg",
        description: "The Aventador SVJ is a track-focused beast with unparalleled aerodynamics and a screaming V12 engine. The pinnacle of Lamborghini engineering.",
        specs: [{ icon: <FaGears />, label: "Engine", value: "6.5L V12" }, { icon: <FaRoad />, label: "0-100 km/h", value: "2.8s" }, { icon: <FaGaugeHigh />, label: "Top Speed", value: "351 km/h" }],
        fuel: "Petrol", mileage: "5 kmpl",
        keyFeatures: [
            "Limited Production Model (900 Units)",
            "ALA 2.0 Active Aerodynamics System",
            "Carbon Fiber Monocoque Chassis",
            "Exclusive Ad Personam Customization"
        ]
    },
    {
        id: 2,
        title: "Ferrari F8 Tributo",
        price: "₹ 4.02 Crore",
        image: "https://i.ibb.co/1NDHGzr/1753941327185.jpg",
        description: "A celebration of Ferrari's V8 engine, the F8 Tributo combines blistering performance with remarkable driving pleasure. A true modern classic.",
        specs: [{ icon: <FaGears />, label: "Engine", value: "3.9L V8 Twin-Turbo" }, { icon: <FaRoad />, label: "0-100 km/h", value: "2.9s" }, { icon: <FaGaugeHigh />, label: "Top Speed", value: "340 km/h" }],
        fuel: "Petrol", mileage: "7 kmpl",
        keyFeatures: [
            "710 Horsepower Output",
            "Advanced Side Slip Control System",
            "High-performance ceramic brakes",
            "Lightweight construction"
        ]
    },
    {
        id: 3,
        title: "Rolls-Royce Ghost",
        price: "₹ 6.95 Crore",
        image: "https://i.ibb.co/Y5scVbp/1753941326895.jpg",
        description: "The 'Post Opulence' design philosophy defines the Ghost, offering an incredibly smooth, silent, and refined luxury experience.",
        specs: [{ icon: <FaGears />, label: "Engine", value: "6.75L V12" }, { icon: <FaRoad />, label: "Torque", value: "850 Nm" }, { icon: <FaGaugeHigh />, label: "Transmission", value: "8-speed Auto" }],
        fuel: "Petrol", mileage: "6.5 kmpl",
        keyFeatures: [
            "Planar Suspension System",
            "Illuminated Grille",
            "Starlight Headliner (Customizable)",
            "Self-closing doors"
        ]
    },
    {
        id: 4,
        title: "Porsche 911 Turbo S",
        price: "₹ 3.31 Crore",
        image: "https://i.ibb.co/rK5nQ81/car-4.jpg",
        description: "The all-rounder supercar. Daily drivable yet capable of dominating the track. Features legendary grip and relentless power delivery.",
        specs: [{ icon: <FaGears />, label: "Engine", value: "3.7L Flat-six" }, { icon: <FaRoad />, label: "0-100 km/h", value: "2.7s" }, { icon: <FaGaugeHigh />, label: "Horsepower", value: "650 hp" }],
        fuel: "Petrol", mileage: "8 kmpl",
        keyFeatures: [
            "Porsche Active Suspension Management (PASM)",
            "Dynamic Chassis Control (PDCC)",
            "Exclusive Design Wheels",
            "Rear-axle steering"
        ]
    },
    {
        id: 5,
        title: "Mercedes-Benz G63 AMG",
        price: "₹ 2.55 Crore",
        image: "https://i.ibb.co/T1J2h7t/car-5.jpg",
        description: "An iconic off-roader infused with AMG performance. Boxy, imposing, and incredibly luxurious inside.",
        specs: [{ icon: <FaGears />, label: "Engine", value: "4.0L V8 Bi-turbo" }, { icon: <FaRoad />, label: "Power", value: "577 hp" }, { icon: <FaGaugeHigh />, label: "Drivetrain", value: "AWD" }],
        fuel: "Petrol", mileage: "6 kmpl",
        keyFeatures: [
            "Three differential locks",
            "Exclusive Interior Plus Package",
            "AMG RIDE CONTROL suspension",
            "Off-road reduction gear"
        ]
    },
    {
        id: 6,
        title: "McLaren 720S",
        price: "₹ 4.65 Crore",
        image: "https://i.ibb.co/Wc4B1P0/car-6.jpg",
        description: "Lightweight, aerodynamic perfection. The 720S offers a visceral driving experience with a clear focus on the driver.",
        specs: [{ icon: <FaGears />, label: "Engine", value: "4.0L V8 Twin-Turbo" }, { icon: <FaRoad />, label: "Weight", value: "1283 kg" }, { icon: <FaGaugeHigh />, label: "Horsepower", value: "710 hp" }],
        fuel: "Petrol", mileage: "8.5 kmpl",
        keyFeatures: [
            "Proactive Chassis Control II",
            "Carbon fibre MonoCage II chassis",
            "Electro-hydraulic steering",
            "Drift Control Function"
        ]
    },
];

// --- Utility Components ---

/**
 * Renders a single Car Card.
 * Note: 'View Details' opens the modal.
 */
const CarCard = ({ car, onView }) => {
    const priceColor = car.price.includes('Crore') ? 'text-yellow-400' : 'text-cyan-400';

    return (
        <article
            // Removed onClick from the parent article to ensure only the button opens the modal.
            className="group relative text-sm font-bold rounded-xl shadow-lg p-3 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-cyan-400/50 transition duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden"
        >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                <img
                    src={car.image}
                    alt={car.title || `Car ${car.id}`}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-3 flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-base font-extrabold text-cyan-300 group-hover:text-yellow-400 transition-colors">{car.title || `Car ID: ${car.id}`}</h2>
                    <p className="text-xs mt-1 text-gray-400 truncate">{car.description || "No description available."}</p>
                </div>
                <div className="mt-3 flex justify-end items-center">
                    <span className={`text-lg font-black ${priceColor} mr-auto`}>{car.price}</span>
                    
                    {/* View Details button to open the modal */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Stop propagation to prevent any parent click handlers
                            onView(car); // This calls setModalCar(car)
                        }}
                        className="ml-1 inline-flex items-center gap-1 px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-500 transition text-xs shadow-md shadow-yellow-700/50"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </article>
    );
};

// --- Pagination Component (No change needed) ---

const Pagination = ({ currentPage, totalPages, goToPage }) => {
    const createButton = (label, pageNum, isActive, isDisabled) => (
        <button
            type="button"
            disabled={isDisabled}
            onClick={() => goToPage(pageNum)}
            className={`px-3 py-1 rounded text-xs font-medium border transition duration-150 ${
                isActive
                    ? "bg-cyan-500 text-white border-cyan-500 shadow-md shadow-cyan-500/50"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:border-cyan-500/30 disabled:opacity-50"
            }`}
        >
            {label}
        </button>
    );

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5; 

        if (totalPages <= maxVisiblePages + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1); 
            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            if (currentPage < 4) {
                end = Math.min(totalPages - 1, maxVisiblePages - 1);
            } else if (currentPage > totalPages - 3) {
                start = Math.max(2, totalPages - maxVisiblePages + 2);
            }

            if (start > 2) pageNumbers.push("...");
            for (let i = start; i <= end; i++) pageNumbers.push(i);
            if (end < totalPages - 1) pageNumbers.push("...");
            pageNumbers.push(totalPages);
        }
        return [...new Set(pageNumbers)];
    };

    const pageNumbers = getPageNumbers();

    return (
        <nav className="mt-8 flex flex-wrap justify-center gap-2">
            {createButton("First", 1, false, currentPage === 1)}
            {createButton("Prev", currentPage - 1, false, currentPage === 1)}

            {pageNumbers.map((p, index) =>
                p === "..." ? (
                    <span key={index} className="px-3 py-1 text-xs text-gray-500">
                        ...
                    </span>
                ) : (
                    createButton(p, p, p === currentPage, false)
                )
            )}

            {createButton("Next", currentPage + 1, false, currentPage === totalPages)}
            {createButton("Last", totalPages, false, currentPage === totalPages)}
        </nav>
    );
};

// --- Modal Component (FIXED: Link component usage corrected) ---

const CarDetailsModal = ({ car, onClose }) => (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 backdrop-blur-sm"
        onClick={onClose}
    >
        <div
            className="bg-gray-800 rounded-xl max-w-4xl w-full overflow-hidden relative shadow-2xl shadow-cyan-500/30 transform transition-transform duration-300 scale-100 border border-cyan-700/50"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-red-600/80 text-white p-2 rounded-full hover:bg-red-700 transition z-10 shadow-lg"
                aria-label="Close modal"
            >
                <FaTimes size={16} />
            </button>
            
            <div className="relative">
                <img
                    src={car.image}
                    alt={car.title || "Car"}
                    className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="p-6 md:p-8">
                <h2 className="text-3xl font-extrabold mb-2 text-cyan-300 border-b border-gray-700 pb-2">{car.title}</h2>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-black text-yellow-400">{car.price}</span>
                    <span className="text-sm font-medium text-gray-400">Mileage: {car.mileage} | Fuel: {car.fuel}</span>
                </div>
                
                <p className="text-gray-300 text-base mb-6 border-b border-gray-700 pb-4">{car.description}</p>
                
                {car.keyFeatures && car.keyFeatures.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3 border-b border-gray-700/50 pb-2">Key Highlights</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 list-none pl-0">
                            {car.keyFeatures.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                    <span className="text-cyan-400 mt-1">●</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {car.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-700/50">
                            <div className="text-xl text-cyan-400">{spec.icon}</div>
                            <div>
                                <p className="text-xs font-medium text-gray-400">{spec.label}</p>
                                <p className="text-sm font-bold text-white">{spec.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🟢 CRITICAL FIX: Link component wrapped around an <a> tag */}
                <Link 
                    href="/contact" 
                    passHref 
                    className="w-full mt-4 block" // Added block utility class for full width
                >
                    <a 
                        onClick={onClose} // Close modal before navigation
                        className="w-full flex items-center justify-center px-4 py-3 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition text-lg shadow-xl shadow-cyan-700/50"
                    >
                        Enquire Now <RxArrowRight className="inline ml-1" size={16} />
                    </a>
                </Link>
                {/* END FIXED SECTION */}

            </div>
        </div>
    </div>
);


// --- Main Component (No changes needed here as the issue was within the components) ---

export default function CarGallery() {
    const TOTAL_CARS = DETAILED_CARS_DATA.length; 
    const cars = DETAILED_CARS_DATA; 

    const [loading, setLoading] = useState(true);
    const [pageSize, setPageSize] = useState(6); 
    const [currentPage, setCurrentPage] = useState(1);
    const [modalCar, setModalCar] = useState(null); // The car object to display in the modal

    const totalPages = Math.ceil(TOTAL_CARS / pageSize);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); 
        return () => clearTimeout(timer);
    }, [pageSize]); 

    const goToPage = (n) => {
        const newPage = Math.min(Math.max(1, n), totalPages);
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 500);
        }
    };

    const visibleCars = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return cars.slice(startIndex, startIndex + pageSize);
    }, [cars, currentPage, pageSize]);

    const CarSkeleton = () => (
        <div className="relative text-sm font-bold rounded-xl shadow-lg p-3 bg-gray-800/50 animate-pulse flex flex-col h-72 border border-gray-700">
            <div className="aspect-[4/3] w-full bg-gray-700 rounded-xl"></div>
            <div className="p-3 flex-grow flex flex-col justify-between">
                <div>
                    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <div className="h-6 bg-gray-700 rounded-full w-1/3"></div>
                    <div className="h-8 bg-gray-700 rounded-full w-1/4"></div>
                </div>
            </div>
        </div>
    );
    
    const galleryContent = loading
        ? Array.from({ length: Math.min(pageSize, TOTAL_CARS) }).map((_, i) => <CarSkeleton key={i} />)
        : visibleCars.map((car) => (
            <CarCard key={car.id} car={car} onView={setModalCar} />
        ));


    return (
        <div id="car-gallery" className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <h1 className="text-4xl font-extrabold text-center mb-10 text-cyan-400 drop-shadow-lg [text-shadow:_0_0_10px_rgb(6_182_212_/_0.5)]">
                   Exclusive Exotic Car Showroom
                </h1>

                {/* Page controls */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 border-b border-gray-700 pb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400 font-medium">Viewing:</span>
                        <select
                            value={pageSize}
                            onChange={(e) => {
                                const newSize = Number(e.target.value);
                                setPageSize(newSize);
                                setCurrentPage(1); 
                                setLoading(true); 
                            }}
                            className="px-4 py-2 rounded bg-gray-700 border-gray-600 text-sm focus:ring-cyan-500 focus:border-cyan-500 transition"
                        >
                            <option value={3}>3 per page</option>
                            <option value={6}>6 per page</option>
                            {TOTAL_CARS > 6 && <option value={12}>12 per page</option>}
                            {TOTAL_CARS > 12 && <option value={20}>20 per page</option>}
                        </select>
                    </div>

                    <div className="text-sm font-bold text-gray-300 bg-gray-800 p-2 rounded">
                        Showing {visibleCars.length} results — Page {currentPage} of {totalPages}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {galleryContent}
                </div>

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPage={goToPage}
                    />
                )}
                
                {/* Footer */}
                <footer className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
                    Total {TOTAL_CARS} vehicles available for immediate purchase.
                </footer>

                {/* Scroll-to-top button */}
                <button
                    aria-label="Scroll to top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-6 bg-cyan-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg shadow-xl hover:bg-cyan-600 transition-colors z-40"
                >
                    <RxArrowRight size={16} className="transform -rotate-90" />
                </button>

                {/* Modal RENDER */}
                {modalCar && (
                    <CarDetailsModal car={modalCar} onClose={() => setModalCar(null)} />
                )}
            </div>
        </div>
    );
}