import { PROFILE } from "../constants";
import { RiArrowRightUpLine, RiGithubLine, RiLinkedinLine, RiTwitterXLine, RiDownloadLine, RiTerminalLine } from "@remixicon/react";
import NewDanishImage from "../assets/nawaz_Danish_image.jpeg";
import NutriScanVideo from "../assets/Nutri.mp4";
import CodeSwapVideo from "../assets/CodeSwap.mp4";
import SmartQRImage from "../assets/SmartQR.png";
import SmartQRMobileImage from "../assets/SmartQRMobile.png";
import CareerHubImage from "../assets/CareerHub.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("redirect.ts");
  
  // Real developer code snippet to show in the mock IDE
  const codeSnippets = {
    "redirect.ts": `// Next.js Edge Middleware for Dynamic Pixel Redirections
export async function middleware(req: NextRequest) {
  const slug = req.nextUrl.pathname.split("/").pop();
  const { data: qr } = await supabase
    .from("qr_codes")
    .select("destination_url, custom_pixels")
    .eq("slug", slug)
    .single();

  if (qr?.custom_pixels) {
    // Return Transitional Branded Redirecting HTML Page
    // fires Meta, Google, LinkedIn Pixel Pageview events client-side
    // executes location.href redirection after 850ms
    return new NextResponse(
      renderPixelRedirectPage(qr.destination_url, qr.custom_pixels),
      { headers: { "content-type": "text/html" } }
    );
  }

  // Fast path: Server-side HTTP 302 redirect for direct scanners
  return NextResponse.redirect(qr.destination_url, 302);
}`,
    "package.json": `{
  "name": "smart-qr-saas",
  "version": "1.4.0",
  "private": true,
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "@supabase/supabase-js": "^2.45.0",
    "recharts": "^2.12.0",
    "qrcode.react": "^4.1.0",
    "lucide-react": "^0.450.0"
  }
}`,
    "status.log": `[system] starting development server...
[db] supabase server connection established.
[api] middleware route bindings loaded.
[pixel-service] retargeting engine configured for Meta/GA tags.
[cdn] imagekit assets pipeline linked.
[build] edge middleware compiled successfully in 142ms.`
  };

  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-28 relative grid-pattern-dev font-sans">
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              $ active_now: building_web_systems
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white leading-none">
              Danish Nawaz
            </h1>
            
            <h2 className="text-lg md:text-xl font-mono text-zinc-400">
              Full-Stack Developer & System Builder
            </h2>
            
            <p className="text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed font-light">
              I specialize in writing clean, type-safe APIs, configuring low-latency server middleware, and building high-fidelity client dashboards. Focus areas include Next.js micro-frameworks, database query optimizations, and CDN asset pipes.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/Danish Nawaz_Webdev_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-50 border border-zinc-200 hover:bg-zinc-200 text-zinc-950 font-mono text-xs font-semibold shadow-sm transition-all duration-150 active:scale-98"
              >
                <RiDownloadLine className="w-3.5 h-3.5" />
                download_resume.pdf
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-mono text-xs shadow-sm transition-all duration-150 active:scale-98"
              >
                contact.sh
                <RiArrowRightUpLine className="w-3 h-3 text-zinc-500" />
              </Link>
            </div>
          </div>
          
          {/* PROFILE IMAGE PANEL - Clean, un-adorned slate border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl border border-zinc-800 bg-zinc-900 p-2 shadow-sm">
              <img
                src={NewDanishImage}
                alt="Danish Nawaz"
                className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-zinc-950/80 border border-zinc-850 px-2 py-0.5 rounded font-mono text-[9px] text-zinc-400">
                system: online
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE MOCK IDE PANEL */}
        <div className="mb-24 border border-zinc-800 bg-zinc-900/40 rounded-xl overflow-hidden shadow-sm font-mono-dev">
          
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-950/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
              <span className="text-zinc-650 text-[10px] ml-2 font-mono uppercase tracking-wider">code_editor</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
              <RiTerminalLine className="w-3.5 h-3.5" />
              <span>bash_console</span>
            </div>
          </div>
          
          {/* Editor Tabs */}
          <div className="flex border-b border-zinc-800 bg-zinc-950/40 text-xs">
            {Object.keys(codeSnippets).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 border-r border-zinc-800 font-mono text-[11px] transition-all duration-150 ${
                  activeTab === tab 
                    ? "bg-zinc-900/80 text-zinc-100 border-b-2 border-b-indigo-500" 
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Editor Body */}
          <div className="p-5 overflow-x-auto text-[11px] leading-relaxed text-zinc-300 bg-zinc-950/20 font-mono min-h-[220px] max-h-[320px]">
            <pre className="whitespace-pre">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </div>

        {/* BENTO ARCHITECTURE SUMMARY */}
        <div className="border-t border-zinc-900 pt-16 mb-24">
          <h2 className="text-xl font-display font-black tracking-wider text-white uppercase mb-8">
            Core Production Deployments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1: SmartQR */}
            <div className="border border-zinc-850 hover:border-zinc-800 bg-zinc-900/10 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-200">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-display font-bold text-white">SmartQR SaaS</h3>
                  <a href="https://smart-qr-a7zx.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-zinc-550 hover:text-zinc-200"><RiArrowRightUpLine className="w-4 h-4" /></a>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  A high-throughput link management and custom QR customization engine. Implements dynamic transitional pages to fire Google/Meta client tracking pixels prior to edge redirection, with backend records managed on Supabase triggers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Supabase DB", "Edge Middleware", "ImageKit API"].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px] bg-zinc-900 text-zinc-400 border border-zinc-800/80">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 max-h-40">
                <img src={SmartQRImage} alt="SmartQR Dashboard Preview" className="w-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>

            {/* Project 2: CareerHub */}
            <div className="border border-zinc-850 hover:border-zinc-800 bg-zinc-900/10 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-200">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-display font-bold text-white">CareerHub</h3>
                  <a href="https://www.careerhubs.info/" target="_blank" rel="noopener noreferrer" className="text-zinc-550 hover:text-zinc-200"><RiArrowRightUpLine className="w-4 h-4" /></a>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Career portal for managing professional profiles, job application timelines, and company exploration. Integrates AWS S3 file hosting pipes and a PostgreSQL relational database for secure developer credentials tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "TypeScript", "PostgreSQL", "AWS S3 Pipes"].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px] bg-zinc-900 text-zinc-400 border border-zinc-800/80">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 max-h-40">
                <img src={CareerHubImage} alt="CareerHub Dashboard Preview" className="w-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
            
          </div>
        </div>

        {/* DEVICE SHOWCASE */}
        <div className="border-t border-zinc-900 pt-16">
          <h2 className="text-xl font-display font-black tracking-wider text-white uppercase mb-8 text-center sm:text-left">
            Production Viewports
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Viewport 1: NutriScan */}
            <div className="border border-zinc-850 rounded-2xl p-6 bg-zinc-900/10 flex flex-col items-center justify-between">
              <div className="w-36 h-72 bg-black rounded-[2rem] border border-zinc-800 overflow-hidden relative shadow-md p-1.5">
                <div className="w-full h-full bg-slate-900 rounded-[1.8rem] overflow-hidden relative">
                  <video src={NutriScanVideo} autoPlay loop muted playsInline className="w-full h-full object-cover filter grayscale contrast-125" />
                </div>
              </div>
              <div className="mt-6 text-center space-y-2">
                <h4 className="font-mono text-sm font-semibold text-white">NutriScan (Mobile)</h4>
                <p className="text-xs text-zinc-500 max-w-[180px] leading-relaxed font-light">
                  Kotlin barcodes scanning client for food ingredient checking.
                </p>
                <a href="https://nutri-scan-ai-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-mono text-indigo-400 hover:text-indigo-300 tracking-wider uppercase">
                  view_live_app
                </a>
              </div>
            </div>

            {/* Viewport 2: SmartQR */}
            <div className="border border-zinc-850 rounded-2xl p-6 bg-zinc-900/10 flex flex-col items-center justify-between">
              <div className="w-36 h-72 bg-black rounded-[2rem] border border-zinc-800 overflow-hidden relative shadow-md p-1.5">
                <div className="w-full h-full bg-slate-900 rounded-[1.8rem] overflow-hidden relative">
                  <img src={SmartQRMobileImage} alt="SmartQR" className="w-full h-full object-cover object-top filter grayscale contrast-125" />
                </div>
              </div>
              <div className="mt-6 text-center space-y-2">
                <h4 className="font-mono text-sm font-semibold text-white">SmartQR (Web App)</h4>
                <p className="text-xs text-zinc-500 max-w-[180px] leading-relaxed font-light">
                  Dynamic QR configuration layout showing blueprint layouts.
                </p>
                <a href="https://smart-qr-a7zx.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-mono text-indigo-400 hover:text-indigo-300 tracking-wider uppercase">
                  view_live_app
                </a>
              </div>
            </div>

            {/* Viewport 3: CodeSwap */}
            <div className="border border-zinc-850 rounded-2xl p-6 bg-zinc-900/10 flex flex-col items-center justify-between">
              <div className="w-36 h-72 bg-black rounded-[2rem] border border-zinc-800 overflow-hidden relative shadow-md p-1.5">
                <div className="w-full h-full bg-slate-900 rounded-[1.8rem] overflow-hidden relative">
                  <video src={CodeSwapVideo} autoPlay loop muted playsInline className="w-full h-full object-cover filter grayscale contrast-125" />
                </div>
              </div>
              <div className="mt-6 text-center space-y-2">
                <h4 className="font-mono text-sm font-semibold text-white">CodeSwap (Collab)</h4>
                <p className="text-xs text-zinc-500 max-w-[180px] leading-relaxed font-light">
                  Websocket sharing client displaying code sync logic.
                </p>
                <span className="text-[10px] font-mono text-zinc-600">
                  in_private_dev
                </span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;