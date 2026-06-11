import { useState } from "react"
import { Link } from "react-router-dom"
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiGithubLine, RiLinkedinLine, RiTwitterXLine, RiArrowLeftLine, RiTerminalLine } from "@remixicon/react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [systemLogs, setSystemLogs] = useState([
    "[sys] mail server listening on port 25...",
    "[sys] smtp relay secure channel active.",
    "[net] ready to accept payload data."
  ]);
  
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
    
    // Add pending log line
    setSystemLogs(prev => [
      ...prev,
      `[net] buffering payload package from ${formData.email}...`,
      `[smtp] dispatching payload handshake request...`
    ]);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setSystemLogs(prev => [
        ...prev,
        `[smtp] dispatch successful. message_id: md_${Math.random().toString(36).substring(2, 8)}`,
        `[sys] connection closed cleanly (202).`
      ]);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };
  
  return (
    <section className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen relative grid-pattern-dev font-sans">
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-black mb-4 text-white">
            Connection Hub
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Initialize an SMTP transmission or link via standard social hooks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
          
          {/* Left Side: Mock System Logs & Contact Parameters */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Connection Status Log Terminal */}
            <div className="border border-zinc-800 bg-zinc-900/40 rounded-xl overflow-hidden shadow-sm font-mono-dev">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-800 bg-zinc-950/80">
                <span className="text-zinc-500 text-[10px] uppercase font-mono tracking-wider">mail_transaction.log</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="p-4 font-mono text-[10px] leading-relaxed text-zinc-450 min-h-[140px] max-h-[200px] overflow-y-auto space-y-1 bg-zinc-950/40">
                {systemLogs.map((log, idx) => (
                  <div key={idx} className={log.includes("successful") ? "text-emerald-400" : ""}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact nodes */}
            <div className="space-y-3 font-mono">
              
              <div className="p-4 bg-zinc-900/20 border border-zinc-850 rounded-xl flex items-center gap-3.5">
                <RiMailLine className="w-4 h-4 text-zinc-500" />
                <div>
                  <div className="text-[10px] text-zinc-650 uppercase tracking-wider">email</div>
                  <a href="mailto:danish0edu@gmail.com" className="text-xs text-zinc-355 hover:text-indigo-400">
                    danish0edu@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="p-4 bg-zinc-900/20 border border-zinc-850 rounded-xl flex items-center gap-3.5">
                <RiPhoneLine className="w-4 h-4 text-zinc-500" />
                <div>
                  <div className="text-[10px] text-zinc-650 uppercase tracking-wider">phone</div>
                  <a href="tel:+916203919978" className="text-xs text-zinc-355 hover:text-indigo-400">
                    +91 6203919978
                  </a>
                </div>
              </div>
              
              <div className="p-4 bg-zinc-900/20 border border-zinc-850 rounded-xl flex items-center gap-3.5">
                <RiMapPinLine className="w-4 h-4 text-zinc-500" />
                <div>
                  <div className="text-[10px] text-zinc-650 uppercase tracking-wider">location</div>
                  <div className="text-xs text-zinc-355">
                    Ambala, Haryana, India
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl">
              <h2 className="text-lg font-mono font-bold text-white mb-6 uppercase tracking-wider">
                $ send_message.sh
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-[10px] text-zinc-500 uppercase tracking-wider">
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-850 focus:border-zinc-700 text-zinc-200 placeholder-zinc-700 rounded-lg text-xs outline-none transition-colors"
                    placeholder="guest_user"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-[10px] text-zinc-500 uppercase tracking-wider">
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-850 focus:border-zinc-700 text-zinc-200 placeholder-zinc-700 rounded-lg text-xs outline-none transition-colors"
                    placeholder="user@domain.com"
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-[10px] text-zinc-500 uppercase tracking-wider">
                    message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-zinc-950 border border-zinc-850 focus:border-zinc-700 text-zinc-200 placeholder-zinc-700 rounded-lg text-xs outline-none transition-colors resize-none"
                    placeholder="type payload here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all duration-150 ${
                    isSubmitting 
                      ? "bg-zinc-900 border border-zinc-850 text-zinc-650 cursor-not-allowed" 
                      : "bg-zinc-100 hover:bg-zinc-250 text-zinc-950 shadow-sm active:scale-98"
                  }`}
                >
                  {isSubmitting ? "transmitting..." : "execute_submit()"}
                </button>
                
                {submitStatus === "success" && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 text-[11px] rounded-lg">
                    [success] Message buffered for dispatch. Check terminal logs.
                  </div>
                )}
              </form>

              {/* Social Channels Row */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between font-mono">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">socials</span>
                <div className="flex gap-2">
                  <a 
                    href="https://github.com/DAlgoSculptor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-950 border border-zinc-850 hover:border-zinc-800 text-zinc-500 hover:text-zinc-200 rounded-lg transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <RiGithubLine className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/danish-techy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-950 border border-zinc-850 hover:border-zinc-800 text-zinc-500 hover:text-zinc-200 rounded-lg transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <RiLinkedinLine className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://twitter.com/DanishNawaz0009" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-950 border border-zinc-850 hover:border-zinc-800 text-zinc-500 hover:text-zinc-200 rounded-lg transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <RiTwitterXLine className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
          
        </div>
        
        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 font-mono text-xs transition-all duration-150"
          >
            <RiArrowLeftLine className="w-3.5 h-3.5" />
            cd ..
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact