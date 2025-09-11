import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiGithubLine, RiLinkedinLine, RiTwitterXLine } from "@remixicon/react";

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
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
                        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                    </p>
                </div>
                
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="animate-fade-in">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-8">
                            I'm always open to discussing new opportunities, creative projects, or partnership proposals.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start group">
                                <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-lg transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800/50">
                                    <RiMailLine className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email</h3>
                                    <a 
                                        href="mailto:helpbynutriscanai@gmail.com" 
                                        className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                                    >
                                        helpbynutriscanai@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start group">
                                <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-lg transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800/50">
                                    <RiPhoneLine className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Phone</h3>
                                    <a 
                                        href="tel:+919876543210" 
                                        className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                                    >
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start group">
                                <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-lg transition-all duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800/50">
                                    <RiMapPinLine className="w-6 h-6" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Location</h3>
                                    <p className="text-slate-700 dark:text-slate-300">
                                        Ambala, Haryana, India
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-12">
                            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Connect With Me</h3>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://github.com/DAlgoSculptor" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700 group"
                                >
                                    <RiGithubLine className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/danish-nawaz-86154028a/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700 group"
                                >
                                    <RiLinkedinLine className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200" />
                                </a>
                                <a 
                                    href="https://x.com/DNawaz65591" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700 group"
                                >
                                    <RiTwitterXLine className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="animate-fade-in animation-delay-200">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Me a Message</h2>
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
                                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 shadow-sm"
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
                                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 shadow-sm"
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
                                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 shadow-sm"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 transform hover:-translate-y-1 shadow-md ${
                                    isSubmitting 
                                        ? 'bg-green-400 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {submitStatus === "success" && (
                                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg animate-fade-in">
                                    Thank you for your message! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                
                <div className="mt-16 text-center animate-fade-in animation-delay-500">
                    <Link 
                        to="/" 
                        className="inline-block px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 shadow-md transform hover:-translate-y-1"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
            
            {/* Custom styles */}
            <style>{`
                .animate-fade-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                    transform: translateY(20px);
                }
                
                .animation-delay-200 {
                    animation-delay: 0.2s;
                }
                
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
                
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}

export default Contact