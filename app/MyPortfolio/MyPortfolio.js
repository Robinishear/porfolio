// File: app/CarGallery.jsx
"use client";
import Image from "next/image";
import React, { useState, useMemo, useEffect, useCallback } from "react";
// UI Icons
import { RxArrowRight } from "react-icons/rx";
import { FaGears, FaRoad, FaGaugeHigh } from "react-icons/fa";

// External components/data - Assuming these exist in the project structure
// ধরে নেওয়া হচ্ছে Date হলো গাড়ির তথ্যের একটি অ্যারে (e.g., const Date = [...] export)
import CarData from "./Date"; 
import CarDetailsModal from "./CarDetailsModal";

// --- আইকন ম্যাপিং (String থেকে Component এ রূপান্তর) ---
const iconMap = {
  FaGears: <FaGears className="text-cyan-400" />,
  FaRoad: <FaRoad className="text-cyan-400" />,
  FaGaugeHigh: <FaGaugeHigh className="text-cyan-400" />,
};

// --- Utility Components: Car Card ---

/**
 * Renders a single Car Card.
 */
const CarCard = ({ car, onView }) => {
  // Determine color based on price format (simple logic)
  const priceColor = car.price?.includes("Crore")
    ? "text-yellow-400"
    : "text-cyan-400";

  return (
    <article 
      className="group relative text-sm font-bold rounded-xl shadow-lg p-3 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/80 hover:shadow-cyan-400/50 transition duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden cursor-pointer"
      onClick={() => onView(car)} // Click anywhere on the card to open modal
    >
      {/* Image Container */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
        <img
          src={car.image}
          alt={car.title || `Car ${car.id}`}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-3 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-base font-extrabold text-cyan-300 group-hover:text-yellow-400 transition-colors truncate">
            {car.title || `Car ID: ${car.id}`}
          </h2>
          <p className="text-xs mt-1 text-gray-400 line-clamp-2 min-h-[2.25rem]">
            {car.description || "No description available."}
          </p>
        </div>
        
        {/* Price & Button */}
        <div className="mt-3 flex justify-end items-center">
          <span className={`text-lg font-black ${priceColor} mr-auto`}>
            {car.price}
          </span>
          
          {/* View Details button to open the modal */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click from firing twice
              onView(car);
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

// --- Utility Components: Pagination ---

const Pagination = ({ currentPage, totalPages, goToPage }) => {
  // Memoized function for creating page buttons
  const createButton = useCallback((label, pageNum, isActive, isDisabled) => (
    <button
      type="button"
      key={label}
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
  ), [goToPage]);

  // Memoized function to calculate visible page numbers
  const pageNumbers = useMemo(() => {
    const numbers = [];
    const maxVisiblePages = 5;
    const half = Math.floor(maxVisiblePages / 2);

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
      return numbers;
    }

    // Always include first page
    numbers.push(1);

    let start = Math.max(2, currentPage - half + 1);
    let end = Math.min(totalPages - 1, currentPage + half - 1);

    if (currentPage < maxVisiblePages) {
      end = maxVisiblePages - 1;
    } else if (currentPage > totalPages - maxVisiblePages + 1) {
      start = totalPages - maxVisiblePages + 2;
    }

    if (start > 2) numbers.push("...");

    for (let i = start; i <= end; i++) {
      if (i > 1 && i < totalPages) numbers.push(i);
    }
    
    if (end < totalPages - 1) numbers.push("...");

    // Always include last page if not already included
    if (totalPages > 1) {
        numbers.push(totalPages);
    }
    
    // Filter duplicates
    return [...new Set(numbers)]; 
  }, [currentPage, totalPages]);

  return (
    <nav className="mt-8 flex flex-wrap justify-center gap-2">
      {createButton("First", 1, false, currentPage === 1)}
      {createButton("Prev", currentPage - 1, false, currentPage === 1)}

      {pageNumbers.map((p, index) =>
        p === "..." ? (
          <span key={`dot-${index}`} className="px-3 py-1 text-xs text-gray-500">
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


// --- Utility Components: Skeleton Loader ---

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


// --- Main Component: CarGallery ---

export default function CarGallery() {
  // Prepare data: Replace string icon names with actual React components
  const cars = useMemo(() => {
    // Ensure CarData is treated as an array and exists
    if (!Array.isArray(CarData)) return [];
      
    return CarData.map((car) => ({
      ...car,
      specs: car.specs.map((spec) => ({
        ...spec,
        icon: iconMap[spec.icon] || null, // Fallback for missing icon
      })),
    }));
  }, []);

  const TOTAL_CARS = cars.length;

  // State Management
  const [loading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalCar, setModalCar] = useState(null); // Car object for the modal

  const totalPages = Math.ceil(TOTAL_CARS / pageSize);
  
  // Effect for initial and page size change loading state
  useEffect(() => {
    // Small delay to simulate data fetching/processing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [pageSize]);

  // Handle page change
  const goToPage = useCallback((n) => {
    const newPage = Math.min(Math.max(1, n), totalPages);
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      setLoading(true);
      // Simulate loading delay for better UX and scroll to top
      setTimeout(() => {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    }
  }, [currentPage, totalPages]);
  
  // Memoized list of cars to display on the current page
  const visibleCars = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return cars.slice(startIndex, startIndex + pageSize);
  }, [cars, currentPage, pageSize]);

  // Content to display: Skeletons or Car Cards
  const galleryContent = loading
    ? Array.from({ length: Math.min(pageSize, TOTAL_CARS) }).map((_, i) => (
        <CarSkeleton key={i} />
      ))
    : visibleCars.map((car) => (
        <CarCard key={car.id} car={car} onView={setModalCar} />
      ));
      
  // Handle pageSize change and reset page
  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page
    setLoading(true);
  };

  return (
    <div id="car-gallery" className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg [text-shadow:_0_0_10px_rgb(6_182_212_/_0.5)]">
            Exclusive Exotic Car Showroom
          </h1>
        </header>

        {/* Page controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 border-b border-gray-700 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 font-medium">Viewing:</span>
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="px-4 py-2 rounded bg-gray-700 border-gray-600 text-sm focus:ring-cyan-500 focus:border-cyan-500 transition"
            >
              <option value={3}>3 per page</option>
              <option value={6}>6 per page</option>
              {TOTAL_CARS > 6 && <option value={12}>12 per page</option>}
              {TOTAL_CARS > 12 && <option value={20}>20 per page</option>}
            </select>
          </div>

          <div className="text-sm font-bold text-gray-300 bg-gray-800 p-2 rounded">
            Showing {visibleCars.length} results — Page {currentPage} of{" "}
            {totalPages}
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
        
        {/* Empty State */}
        {!loading && TOTAL_CARS === 0 && (
            <div className="text-center py-16 text-gray-500">
                <p className="text-xl font-semibold">No cars available at the moment.</p>
                <p className="mt-2">Please check back later or adjust your filters.</p>
            </div>
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