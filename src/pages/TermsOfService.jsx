import { Link } from "react-router-dom";

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              <strong>Last Updated:</strong> {lastUpdated}
            </p>
            
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                These Terms of Service ("Terms") govern your access to and use of the website and services provided by Danish Nawaz ("we", "us", or "our").
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Acceptance of Terms</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy. 
                If you disagree with any part of these terms, you may not access the website.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Use of Our Website</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, 
                restrict, or inhibit anyone else's use and enjoyment of the website.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Prohibited Activities</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 mb-4 space-y-2">
                <li>Reproduce, duplicate, copy, or resell any content from the website</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Transmit or introduce any viruses, worms, or other malicious code</li>
                <li>Attempt to gain unauthorized access to the website or related systems</li>
                <li>Use the website in any way that violates any applicable law or regulation</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Intellectual Property</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The website and its original content, features, and functionality are owned by Danish Nawaz and are 
                protected by international copyright, trademark, patent, trade secret, and other intellectual property 
                or proprietary rights laws.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">User Content</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                When you submit content through our contact form or other means, you grant us a worldwide, 
                non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute 
                your content in any existing or future media.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Links to Other Websites</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Our website may contain links to third-party websites or services that are not owned or controlled 
                by us. We have no control over, and assume no responsibility for, the content, privacy policies, 
                or practices of any third-party websites or services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Disclaimer of Warranties</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Our website is provided on an "as is" and "as available" basis. We make no warranties, 
                expressed or implied, and hereby disclaim and negate all other warranties including, without 
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Limitation of Liability</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                In no event shall Danish Nawaz, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible 
                losses, resulting from your access to or use of or inability to access or use the website.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Termination</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We may terminate or suspend access to our website immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Governing Law</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                These Terms shall be governed and construed in accordance with the laws of India, without regard 
                to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Changes to Terms</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days' notice prior to any new terms 
                taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">Contact Us</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/50 mb-6">
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Email:</strong> <a href="mailto:danishnawaz345678@gmail.com" className="text-green-600 dark:text-green-400 hover:underline">helpbynutriscanai@gmail.com</a>
                </p>
              </div>
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

export default TermsOfService;