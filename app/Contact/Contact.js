"use client";

import { useState } from "react";
import Link from "next/link";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaWhatsapp,
    FaPaperPlane,
    FaUser,
    FaAt,
} from "react-icons/fa";


// Reusable social icon link button
const SocialLink = ({ href, children, label }) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="
            p-3 rounded-full 
            bg-gray-700 text-gray-300 
            shadow-lg 
            hover:text-cyan-300 hover:shadow-cyan-400/80 
            transition duration-300 transform hover:scale-110
            flex items-center justify-center
        "
    >
        {children}
    </Link>
);

// Reusable Contact Info Block
const InfoBlock = ({ Icon, title, content }) => (
    <div className="flex items-center justify-start gap-4 text-left">
        <div className="p-3 rounded-full bg-cyan-600 text-white shadow-lg shadow-cyan-500/50">
            <Icon className="text-xl" />
        </div>
        <div>
            <p className="font-bold text-lg text-cyan-300">{title}</p> {/* Color changed to cyan-300 for brighter look */}
            <p className="text-sm text-gray-300">{content}</p>
        </div>
    </div>
);

// --- Main Component ---

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | 'sending'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus("sending");

        // Basic client-side validation
        if (!formData.name || !formData.email || !formData.message) {
            setSubmissionStatus("error");
            setTimeout(() => setSubmissionStatus(null), 3000);
            return;
        }

        try {
            // Simulate API call delay (Replace with your actual API endpoint)
            await new Promise((resolve) => setTimeout(resolve, 1500));
            
            // console.log("Form submitted:", formData);

            // Reset form on success
            setFormData({ name: "", email: "", message: "" });
            setSubmissionStatus("success");
        } catch (error) {
            // console.error("Submission failed:", error);
            setSubmissionStatus("error");
        } finally {
            // Clear status after a delay
            setTimeout(() => setSubmissionStatus(null), 5000);
        }
    };

    const getButtonContent = () => {
        switch (submissionStatus) {
            case "sending":
                return (
                    <span className="flex items-center justify-center gap-2">
                        Sending...
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    </span>
                );
            case "success":
                return "Message Sent Successfully!";
            case "error":
                return "Failed! Please fill all fields.";
            default:
                return (
                    <span className="flex items-center justify-center gap-2">
                        Send Message <FaPaperPlane />
                    </span>
                );
        }
    };

    // **Dynamic Class for Neon Input Focus Glow**
    const inputFocusClass = `
        w-full rounded-lg bg-gray-700 border border-gray-600 px-4 py-3 text-white 
        focus:outline-none focus:ring-2 focus:ring-cyan-500 
        focus:border-cyan-500 transition duration-300
        focus:shadow-[0_0_10px_rgba(6,182,212,0.6)] 
    `;

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center py-16 px-4">
            {/* 💡 Main container animation: Added fade-in/slide-up effect */}
            <div 
                className="max-w-6xl w-full flex flex-col md:flex-row gap-12 
                           opacity-0 animate-fade-in animate-delay-300"
                style={{ animation: 'fadeInUp 1s ease-out forwards', opacity: 1 }} // Fallback/direct style if custom animation class is not defined in Tailwind config
            >
                
                {/* Contact Information Block (Right/Top) */}
                <div 
                    className="p-8 w-full md:max-w-sm lg:max-w-md 
                    bg-gray-800 rounded-2xl shadow-2xl 
                    border border-cyan-800/50 flex flex-col justify-between"
                >
                    <div>
                        <h2 className="text-3xl font-extrabold text-cyan-400 mb-2">
                            Get in Touch
                        </h2>
                        <p className="text-gray-400 mb-8 text-sm">
                            We're here to help! Send us a message or find us using the details below.
                        </p>

                        <div className="space-y-6">
                            <InfoBlock 
                                Icon={FaMapMarkerAlt} 
                                title="Address" 
                                content="123 FoodShare Avenue, Mymensingh, Bangladesh" 
                            />
                            <InfoBlock 
                                Icon={FaEnvelope} 
                                title="Email" 
                                content="mdrobinahmed57898@gmail.com" 
                            />
                            <InfoBlock 
                                Icon={FaPhoneAlt} 
                                title="Phone" 
                                content="+880 133 4757 898" 
                            />
                        </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-700">
                        <p className="text-center font-bold text-gray-300 mb-4">
                            Connect With Me
                        </p>
                        <div className="flex justify-center gap-3 text-lg">
                            <SocialLink 
                                href="https://web.facebook.com/md.robin.ahmed.548869" 
                                label="Facebook profile"
                            >
                                <FaFacebookF />
                            </SocialLink>
                            <SocialLink 
                                href="https://www.linkedin.com/in/md-robin1/" 
                                label="LinkedIn profile"
                            >
                                <FaLinkedinIn />
                            </SocialLink>
                            <SocialLink 
                                href="https://github.com/Robinishear" 
                                label="GitHub profile"
                            >
                                <FaGithub />
                            </SocialLink>
                            <SocialLink 
                                href="https://web.whatsapp.com/" 
                                label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </SocialLink>
                        </div>
                    </div>
                </div>

                {/* Contact Form (Left/Bottom) */}
                <form
                    onSubmit={handleSubmit}
                    className="p-8 w-full md:max-w-md 
                    bg-gray-800 rounded-2xl shadow-2xl 
                    border border-cyan-800/50"
                    autoComplete="off"
                >
                    <h2 className="text-3xl font-extrabold text-cyan-400 mb-2">
                        Send a Message
                    </h2>
                    <p className="text-gray-400 mb-8 text-sm">
                        Fill out the form below and we will get back to you quickly.
                    </p>

                    <div className="mb-5">
                        <label htmlFor="name" className="block font-semibold text-gray-300 mb-2 text-sm">
                            <FaUser className="inline mr-2 text-cyan-400" /> Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputFocusClass} // Used dynamic class for Neon focus
                            required
                        />
                    </div>
                    
                    <div className="mb-5">
                        <label htmlFor="email" className="block font-semibold text-gray-300 mb-2 text-sm">
                            <FaAt className="inline mr-2 text-cyan-400" /> Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputFocusClass} // Used dynamic class for Neon focus
                            required
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="message" className="block font-semibold text-gray-300 mb-2 text-sm">
                            <FaPaperPlane className="inline mr-2 text-cyan-400" /> Your Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="What can we help you with?"
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputFocusClass} resize-none`} // Used dynamic class for Neon focus
                            required
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={submissionStatus === 'sending'}
                        className={`
                            w-full font-bold text-lg rounded-xl px-5 py-3 transition duration-500 shadow-xl
                            ${submissionStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : 
                                submissionStatus === 'error' ? 'bg-red-600 hover:bg-red-700' :
                                'bg-cyan-600 hover:bg-cyan-500 hover:shadow-cyan-400/80 disabled:bg-cyan-800'
                            }
                            transform hover:scale-[1.01]
                        `}
                    >
                        {getButtonContent()}
                    </button>
                </form>

            </div>
        </div>
    );
}
