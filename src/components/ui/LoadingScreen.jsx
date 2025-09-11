import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef();

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

    return () => clearInterval(timer);
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

        // Damping
        this.vx *= 0.98;
        this.vy *= 0.98;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('hsl', 'hsla').replace(')', `, ${this.opacity})`);
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 overflow-hidden"
        >
          {/* Interactive Particle Background */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          
          <div className="relative z-10 text-center">
            {/* Logo/Name Animation with 3D effect */}
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
              <div className="relative inline-block">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-30"
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
                <h1 className="relative text-7xl font-black bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent drop-shadow-2xl">
                  DN
                </h1>
              </div>
              <motion.p 
                className="text-2xl text-emerald-100 mt-4 font-medium tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Danish Nawaz
              </motion.p>
            </motion.div>

            {/* Progress Bar with Neumorphism */}
            <div className="w-96 mx-auto relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-full h-4 mb-6 overflow-hidden border border-slate-700 shadow-neumorphism-progress">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Animated shine effect */}
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
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-emerald-200 text-lg font-medium"
              >
                Loading Portfolio... <span className="font-bold">{Math.round(progress)}%</span>
              </motion.p>
            </div>

            {/* Interactive Elements */}
            <motion.div
              className="mt-12 flex justify-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.2, 
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Interactive Hint */}
            <motion.p
              className="mt-16 text-emerald-300/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Move your cursor around to interact with particles
            </motion.p>
          </div>
          
          {/* Custom styles */}
          <style jsx>{`
            .shadow-neumorphism-progress {
              box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), 
                          -5px -5px 10px rgba(255, 255, 255, 0.05);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;