import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const [scanlinePosition, setScanlinePosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Scanline animation
    const scanlineInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 2) % 100);
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(scanlineInterval);
    };
  }, [onComplete]);

  // Interactive particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = `hsl(${Math.random() * 60 + 100}, 70%, 60%)`; // Green tones
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.vx += (dx / distance) * force * 0.1;
          this.vy += (dy / distance) * force * 0.1;
        }

        // Pulsing effect
        this.pulse += 0.05;
        this.radius = Math.sin(this.pulse) * 1.5 + 2.5;

        // Damping
        this.vx *= 0.98;
        this.vy *= 0.98;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('hsl', 'hsla').replace(')', `, ${this.opacity})`);
        ctx.fill();
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 3
        );
        gradient.addColorStop(0, this.color.replace('hsl', 'hsla').replace(')', `, ${this.opacity * 0.8})`));
        gradient.addColorStop(1, this.color.replace('hsl', 'hsla').replace(')', `, 0)`));
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Create particles
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    createParticles();

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 overflow-hidden"
        >
          {/* Interactive Particle Background */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          {/* Scanline Effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                to bottom,
                transparent 0%,
                rgba(16, 185, 129, 0.1) ${scanlinePosition}%,
                transparent ${scanlinePosition + 2}%,
                transparent 100%
              )`
            }}
          ></div>
          
          <div className="relative z-10 text-center max-w-4xl px-4">
            {/* Holographic Logo/Name Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                rotateY: { duration: 1.5, delay: 0.2 }
              }}
              className="mb-12 relative"
            >
              {/* Holographic Ring */}
              <motion.div
                className="absolute -inset-8 rounded-full border-2 border-emerald-400/30"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Outer Glow */}
              <motion.div
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Logo Container */}
              <div className="relative inline-block">
                <div className="relative">
                  {/* 3D Effect Layers */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl blur opacity-30"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-xl blur"></div>
                  
                  {/* Main Logo */}
                  <h1 className="relative text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 drop-shadow-2xl tracking-wider">
                    DN
                  </h1>
                </div>
              </div>
              
              {/* Data Stream Effect */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-6 bg-emerald-400 rounded-full"
                    animate={{ 
                      height: [10, 24, 10],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Futuristic Terminal Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-10"
            >
              <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-6 py-3">
                <p className="text-emerald-300 font-mono text-lg md:text-xl tracking-wider">
                  <span className="text-emerald-400">&gt; </span>
                  Initializing Danish Nawaz Portfolio...
                  <motion.span
                    className="inline-block w-3 h-6 bg-emerald-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </p>
              </div>
            </motion.div>

            {/* Futuristic Progress Bar */}
            <div className="w-full max-w-2xl mx-auto relative mb-8">
              {/* Progress Track */}
              <div className="h-6 bg-slate-800/50 backdrop-blur-sm rounded-full border border-emerald-500/30 overflow-hidden relative">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>
                
                {/* Progress Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Animated Shine */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  />
                  
                  {/* Particle Effects */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                        animate={{ 
                          y: [0, -20, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* Glowing Edge */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] pointer-events-none"></div>
              </div>
              
              {/* Progress Percentage */}
              <motion.p
                className="text-emerald-300 font-mono text-xl mt-3 tracking-wider"
              >
                SYSTEM STATUS: <span className="font-bold text-emerald-400">{Math.round(progress)}%</span> COMPLETE
              </motion.p>
            </div>

            {/* Data Visualization */}
            <motion.div
              className="flex justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <motion.div
                    className="w-16 h-16 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center mb-2"
                    animate={{ 
                      y: [0, -10, 0],
                      boxShadow: [
                        '0 0 5px rgba(16, 185, 129, 0.3)',
                        '0 0 20px rgba(16, 185, 129, 0.6)',
                        '0 0 5px rgba(16, 185, 129, 0.3)'
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </motion.div>
                  <div className="h-24 w-1 bg-gradient-to-t from-emerald-500/30 to-transparent rounded-full overflow-hidden">
                    <motion.div
                      className="w-full bg-emerald-400 rounded-full"
                      style={{ height: `${Math.random() * 100}%` }}
                      animate={{ 
                        height: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Interactive Hint */}
            <motion.p
              className="text-emerald-400/70 text-sm font-mono tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              &gt;&gt;&gt; MOVE CURSOR TO INTERACT WITH NEURAL NETWORK &lt;&lt;&lt;
            </motion.p>
          </div>
          
          {/* Corner Decorations */}
          <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-emerald-500/50"></div>
          <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-emerald-500/50"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-emerald-500/50"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-emerald-500/50"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;