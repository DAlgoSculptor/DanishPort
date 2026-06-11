import { Link } from "react-router-dom"
import { RiArrowLeftLine } from "@remixicon/react"

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          
          <p className="text-[10px] text-zinc-500 mb-8 border-b border-zinc-900 pb-4">
            last_updated: {lastUpdated.toLowerCase().replace(" ", "_").replace(",", "")}
          </p>
          
          <div className="space-y-6 text-xs text-zinc-400 leading-relaxed font-light">
            <p className="text-sm text-zinc-300">
              These Terms of Service ("Terms") govern your access to and use of the website and services provided by Danish Nawaz ("we", "us", or "our").
            </p>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">1. Acceptance of Terms</h2>
            <p>
              By resolving request packets from this domain or reading its layout resources, you agree to comply with these terms. If you do not accept these rules, terminate socket connections immediately.
            </p>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">2. Permitted Resource Use</h2>
            <p>
              All assets, code snippets, database records, and structural mockups displayed remain the intellectual property of Danish Nawaz. Scraping, redistributing, or executing unauthenticated payload exploits against these endpoints is prohibited.
            </p>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">3. System Warranty Bounds</h2>
            <p>
              THIS SITE IS SERVED "AS IS" AND "AS AVAILABLE". TO THE MAXIMUM EXTENT ALLOWED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESSED OR IMPLIED, INCLUDING PERFOMANCE AND FUNCTIONAL STABILITY. WE ARE NOT LIABLE FOR TRANSIT LATENCY OR INBOUND CONNECTION DROPS.
            </p>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">4. Governing Jurisdiction</h2>
            <p>
              These Terms are governed by and built in accordance with the laws of India. Any litigation routing must occur in the corresponding local jurisdiction.
            </p>
            
            <h2 className="text-sm font-bold text-white pt-4 font-sans uppercase tracking-wider">5. System Support</h2>
            <p>
              For system inquiries or administrative support requests:
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

export default TermsOfService