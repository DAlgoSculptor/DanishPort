import { Link } from "react-router-dom"
import { RiArrowLeftLine } from "@remixicon/react"

const PrivacyPolicy = () => {
  const lastUpdated = "September 11, 2025"
  
  return (
    <section className="pt-28 pb-20 bg-zinc-950 text-zinc-100 min-h-screen relative grid-pattern-dev font-sans">
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 font-mono">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 text-xs mb-8 transition-colors duration-150"
        >
          <RiArrowLeftLine className="w-3.5 h-3.5" />
          cd ..
        </Link>
        
        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-display font-black mb-2 text-white font-sans">
            Privacy Policy
          </h1>
          
          <p className="text-[10px] text-zinc-500 mb-8 border-b border-zinc-900 pb-4">
            last_updated: {lastUpdated.toLowerCase().replace(" ", "_").replace(",", "")}
          </p>
          
          <div className="space-y-6 text-xs text-zinc-400 leading-relaxed font-light">
            <p className="text-sm text-zinc-300">
              This Privacy Policy describes how Danish Nawaz ("we", "us", or "our") collects, uses, and shares information when you visit our website.
            </p>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">1. Information We Collect</h2>
            
            <h3 className="text-xs font-semibold text-zinc-300">A. Information You Provide</h3>
            <p>
              When you contact us through our website form, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name / Guest Alias</li>
              <li>Email Address</li>
              <li>Message Payload</li>
            </ul>
            
            <h3 className="text-xs font-semibold text-zinc-300">B. Automatically Collected Information</h3>
            <p>
              When you visit our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP Address</li>
              <li>Browser metadata / agent</li>
              <li>Operating system</li>
              <li>Referral logs</li>
            </ul>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">2. How We Use Your Information</h2>
            <p>
              We use the collected information for specific operational tasks:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding directly to SMTP payload submissions</li>
              <li>Debugging system latency and client connection faults</li>
              <li>Analyzing traffic volumes across server targets</li>
            </ul>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">3. Data Security & Storage</h2>
            <p>
              We apply strict access bounds to all incoming messages. Payload transmissions are dispatched over encrypted SSL/TLS layers. However, no database transmission over public network channels is fully secure.
            </p>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">4. Third-Party Connections</h2>
            <p>
              Our pages contain links pointing to external endpoints (e.g. GitHub, LinkedIn). We hold no control over, and claim no responsibility for, the data processing rules of third-party platforms.
            </p>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">5. Contact Info</h2>
            <p>
              For security reports or data clearing inquiries, route email to:
            </p>
            <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-855 mt-2">
              <p>
                <strong>System Address:</strong> <a href="mailto:danish0edu@gmail.com" className="text-indigo-400 hover:underline">danish0edu@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy