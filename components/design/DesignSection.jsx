"use client";
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const RocketItem = ({ id, onExplode }) => {
    const [exploded, setExploded] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation(); 
        setExploded(true);
        setTimeout(() => onExplode(id), 1000);
    };

    return (
        <motion.div
            initial={{ y: "110vh", opacity: 1 }}
            animate={exploded ? { scale: 3, opacity: 0 } : { y: "-20vh" }}
            transition={{ duration: exploded ? 0.3 : 10, ease: exploded ? "easeOut" : "linear" }}
            onAnimationComplete={() => !exploded && onExplode(id)}
            onClick={handleClick}
            className="absolute z-[70] cursor-pointer pointer-events-auto" 
            style={{ right: `${Math.random() * 100 + 50}px` }}
        >
            {exploded ? (
                <span className="text-6xl animate-ping">💥</span>
            ) : (
                <div className="flex flex-col items-center">
                    <span className="text-5xl rotate-[-45deg] filter drop-shadow-[0_0_20px_#22d3ee]">🚀</span>
                    <div className="w-[3px] h-40 bg-gradient-to-t from-transparent via-cyan-400 to-transparent blur-[2px]"></div>
                </div>
            )}
        </motion.div>
    );
};

const DesignSection = ({ children }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [rockets, setRockets] = useState([Date.now()]);

    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);

        const interval = setInterval(() => {
            setRockets(prev => [...prev.slice(-5), Date.now()]); 
        }, 5000);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
        };
    }, [mouseX, mouseY]);

    const handleRemove = (id) => {
        setRockets(prev => prev.filter(r => r !== id));
    };

    return (
        <section className="relative w-full min-h-screen bg-[#05070a] overflow-x-hidden px-0 cursor-none">
            
            <div className="fixed inset-0 z-0 pointer-events-none">
                <motion.div 
                    className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]"
                    style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
                />
                
                <div className="absolute top-[15%] -right-10 w-[500px] h-28 bg-gradient-to-r from-blue-900/40 to-transparent rounded-full rotate-[-20deg] border border-white/10 backdrop-blur-3xl"></div>
                <div className="absolute top-[50%] left-[20%] w-96 h-20 bg-gradient-to-l from-indigo-900/40 to-transparent rounded-full rotate-[30deg] border border-white/10 backdrop-blur-md"></div>
            </div>

            <div className="fixed inset-0 z-[65] pointer-events-none">
                <AnimatePresence>
                    {rockets.map(id => (
                        <RocketItem key={id} id={id} onExplode={handleRemove} />
                    ))}
                </AnimatePresence>
            </div>

            <motion.div 
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_2px_#22d3ee] z-[100] pointer-events-none hidden lg:block"
                style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
            />

            <div className="relative z-10 w-full flex flex-col items-center justify-center pt-28 pb-12">
                <div className="w-full max-w-[1400px] px-4 md:px-10">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default DesignSection;