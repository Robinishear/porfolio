"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const RocketItem = ({ id, onExplode }) => {
    const [exploded, setExploded] = useState(false);
    const randomX = useRef(Math.random() * 80 + 10); 
    const speed = useRef(Math.random() * 3 + 5); 

    const handleClick = (e) => {
        e.stopPropagation(); 
        setExploded(true);
        setTimeout(() => onExplode(id), 600);
    };

    return (
        <motion.div
            initial={{ y: "110vh", opacity: 0, scale: 0.8 }}
            animate={exploded 
                ? { scale: [1, 2.5, 0], opacity: 0, filter: "blur(15px) brightness(2)" } 
                : { y: "-20vh", opacity: 1, scale: 1 }
            }
            transition={{ 
                duration: exploded ? 0.4 : speed.current, 
                ease: exploded ? "easeOut" : "linear" 
            }}
            onAnimationComplete={() => !exploded && onExplode(id)}
            onClick={handleClick}
            className="absolute z-[70] cursor-none pointer-events-auto flex flex-col items-center" 
            style={{ left: `${randomX.current}%` }}
        >
            {exploded ? (
                <div className="relative">
                    <span className="text-6xl">💥</span>
                    <div className="absolute inset-0 bg-cyan-500 blur-3xl rounded-full opacity-60 animate-ping"></div>
                </div>
            ) : (
                <div className="flex flex-col items-center group">
                    <div className="text-4xl transition-transform group-hover:scale-110 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                         Robin
                    </div>
                    <motion.div 
                        animate={{ 
                            height: [15, 30, 15], 
                            opacity: [0.6, 1, 0.6],
                            scaleX: [1, 1.4, 1]
                        }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                        className="w-2 bg-gradient-to-t from-transparent via-cyan-400 to-white blur-[1px] rounded-full mt-[-5px]"
                    />
                </div>
            )}
        </motion.div>
    );
};

const DesignSection = ({ children }) => {
    const sectionRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [rockets, setRockets] = useState([]);

    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            mouseX.set(clientX);
            mouseY.set(clientY);
            
            if (sectionRef.current) {
                sectionRef.current.style.setProperty('--x', `${clientX}px`);
                sectionRef.current.style.setProperty('--y', `${clientY}px`);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        const interval = setInterval(() => {
            setRockets(prev => [...prev.slice(-4), Date.now()]); 
        }, 3500);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(interval);
        };
    }, [mouseX, mouseY]);

    const handleRemove = (id) => setRockets(prev => prev.filter(r => r !== id));

    return (
        <section 
            ref={sectionRef}
            className="relative w-full min-h-screen bg-[#01030a] overflow-hidden select-none text-white"
        >
            {/* Background Layers */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#01030a]" />
                <div 
                    className="absolute inset-0 z-[1] opacity-40" 
                    style={{ 
                        backgroundImage: `repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 25px)`, 
                        backgroundSize: "50px 50px", 
                        maskImage: `radial-gradient(500px circle at var(--x) var(--y), black 30%, transparent 100%)` 
                    }} 
                />
                <div 
                    className="absolute inset-0 z-[2] bg-cover bg-center bg-no-repeat opacity-[0.2] mix-blend-screen" 
                    style={{ 
                        backgroundImage: `url('https://i.ibb.co.com/chn3p0VZ/5570215.jpg')`, 
                        filter: "hue-rotate(190deg) brightness(1.1)" 
                    }} 
                />
            </div>

            {/* --- BIG MOUSE GLOW AREA (Spotlight) --- */}
            <div 
                className="fixed inset-0 z-[3] pointer-events-none"
                style={{
                    background: `radial-gradient(450px circle at var(--x) var(--y), rgba(34, 211, 238, 0.12), transparent 70%)`,
                }}
            />

            {/* Rocket Game Layer */}
            <div className="fixed inset-0 z-[65] pointer-events-none">
                <AnimatePresence>
                    {rockets.map(id => (
                        <RocketItem key={id} id={id} onExplode={handleRemove} />
                    ))}
                </AnimatePresence>
            </div>

            {/* --- ADVANCED CYBER CURSOR WITH ROTATING FRAME --- */}
            <motion.div 
                className="fixed top-0 left-0 z-[100] pointer-events-none hidden lg:flex flex-col items-center justify-center"
                style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
            >
                <div className="relative flex items-center justify-center w-20 h-20">
                    
                    {/* 1. Rotating Border Alo (Char-koni diye ghurbe) */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        className="absolute inset-0 border border-cyan-500/40 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        style={{ 
                            borderStyle: 'double',
                            borderWidth: '2px',
                            maskImage: 'conic-gradient(from 0deg, black, transparent 60%, black)' 
                        }}
                    />

                    {/* 2. Middle Turbine (Car chaka style) */}
                    <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="absolute w-10 h-10 border-2 border-dashed border-cyan-400/60 rounded-full"
                    />

                    {/* 3. Corner Brackets */}
                    <div className="absolute -inset-1 border-t-2 border-l-2 border-cyan-400 w-4 h-4 top-0 left-0"></div>
                    <div className="absolute -inset-1 border-b-2 border-r-2 border-cyan-400 w-4 h-4 bottom-0 right-0"></div>
                </div>

                {/* 4. Bottom Intense Light Area */}
                <div className="flex flex-col items-center mt-2">
                    {/* Core Flame */}
                    <motion.div 
                        animate={{ height: [15, 40, 15], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                        className="w-2 bg-cyan-400 blur-[1px] rounded-full shadow-[0_0_15px_#22d3ee]"
                    />
                    {/* Wide Area Glow under cursor */}
                    <div className="absolute top-20 w-[250px] h-[100px] bg-cyan-500/10 blur-[60px] rounded-full"></div>
                </div>
            </motion.div>

            {/* Content Area */}
            <div className="relative z-10 w-full pt-20">
                <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
                    {children}
                </div>
            </div>

            <style jsx global>{`
                :root { --x: 0px; --y: 0px; }
                body { cursor: none; background-color: #01030a; margin: 0; overflow-x: hidden; }
                @media (max-width: 1024px) { body { cursor: auto; } }
            `}</style>
        </section>
    );
};

export default DesignSection;