import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiGithubLine, RiLinkedinLine, RiTwitterXLine } from "@remixicon/react";
import animatedPerson from "../assets/Animated person.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
            
            // Reset status after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 1500);
    };
    
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                    </p>
                </div>
                
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Animated Person Image without blinking eyes */}
                    <div className="flex justify-center">
                        <div className="w-80 h-96 md:w-96 md:h-[450px] flex items-center justify-center">
                            <img 
                                src={animatedPerson} 
                                alt="Animated Person" 
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    
                    {/* Contact Form and Information */}
                    <div>
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/30 dark:border-slate-700/50">
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                                Send Me a Message
                            </h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
                                        placeholder="Your name"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 px-4 rounded-xl font-medium text-white transition-all duration-300 shadow-lg ${
                                        isSubmitting 
                                            ? 'bg-blue-400 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl'
                                    }`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                
                                {submitStatus === "success" && (
                                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl">
                                        Thank you for your message! I'll get back to you soon.
                                    </div>
                                )}
                            </form>
                            
                            {/* Contact Information */}
                            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
                                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Contact Information</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-lg">
                                            <RiMailLine className="w-5 h-5" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</h4>
                                            <a 
                                                href="mailto:danishnawaz345678@gmail.com" 
                                                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                            >
                                                danishnawaz345678@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-lg">
                                            <RiPhoneLine className="w-5 h-5" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</h4>
                                            <a 
                                                href="tel:+916203919978" 
                                                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                            >
                                                +91 6203919978
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-lg">
                                            <RiMapPinLine className="w-5 h-5" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</h4>
                                            <p className="text-slate-700 dark:text-slate-300">
                                                Ambala, Haryana, India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8">
                                    <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Connect With Me</h4>
                                    <div className="flex space-x-4">
                                        <a 
                                            href="https://github.com/DAlgoSculptor" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-600"
                                        >
                                            <RiGithubLine className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                        </a>
                                        <a 
                                            href="https://www.linkedin.com/in/danish-nawaz-86154028a/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-600"
                                        >
                                            <RiLinkedinLine className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                        </a>
                                        <a 
                                            href="https://x.com/DNawaz65591" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white dark:bg-slate-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-600"
                                        >
                                            <RiTwitterXLine className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <Link 
                        to="/" 
                        className="inline-block px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/30 dark:border-slate-700/50 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 shadow-lg"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contact