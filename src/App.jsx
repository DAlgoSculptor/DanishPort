import { ThemeProvider } from "./contexts/ThemeContext"
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import ParticleBackground from "./components/ui/ParticleBackground"
import LoadingScreen from "./components/ui/LoadingScreen"
import { useState } from "react"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Fallback to show content after 8 seconds if loading screen fails
    const loadingFallback = setTimeout(() => {
      if (isLoading) {
        console.warn('Loading timeout - showing content anyway');
        setLoadingError(true);
        setIsLoading(false);
      }
    }, 8000);
    
    return () => clearTimeout(loadingFallback);
  }, [isLoading]);

  // If there's a loading error, skip the loading screen
  if (isLoading && !loadingError) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex flex-col">
        <Navbar />
        <ParticleBackground />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;