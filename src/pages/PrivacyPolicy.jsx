import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const lastUpdated = "September 11, 2025";
  
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="animate-fade-in">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </Link>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-slate-700/50 shadow-neumorphism-card p-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              <strong>Last Updated:</strong> {lastUpdated}
            </p>
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                This Privacy Policy describes how Danish Nawaz ("we", "us", or "our") collects, uses, and shares information when you visit our website.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Information You Provide</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                When you contact us through our website, we may collect:
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Message content</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Automatically Collected Information</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages visited and time spent on our website</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">How We Use Your Information</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                <li>To respond to your inquiries</li>
                <li>To improve our website and services</li>
                <li>To analyze website usage and traffic</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Information Sharing</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. 
                This does not include website hosting partners and other parties who assist us in operating our website, 
                conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Data Security</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We implement appropriate security measures to protect against unauthorized access, alteration, 
                disclosure, or destruction of your personal information. However, no method of transmission over 
                the Internet or electronic storage is 100% secure.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Third-Party Services</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these third-party sites. We encourage you to review the privacy policies 
                of any third-party sites you visit.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Cookies</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Our website may use cookies to enhance your browsing experience. Cookies are small data files 
                stored on your device that help us understand how you use our website and improve your experience.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Your Rights</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Contact Us</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/50 mb-6">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Email:</strong> <a href="mailto:helpbynutriscanai@gmail.com" className="text-green-600 dark:text-green-400 hover:underline">helpbynutriscanai@gmail.com</a>
                </p>
              </div>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Changes to This Policy</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Neumorphism styles */}
      <style>{`
        .shadow-neumorphism-card {
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1), 
                      -10px -10px 20px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-card {
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3), 
                      -10px -10px 20px rgba(255, 255, 255, 0.05);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default PrivacyPolicy;