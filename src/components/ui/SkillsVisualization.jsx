import { useState, useEffect, useRef } from 'react';
import { SKILLS } from '../../constants';
import { useTheme } from '../../contexts/ThemeContext';

const SkillsVisualization = () => {
  const { isDark } = useTheme();
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let nodes = [];
    let connections = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes from skills
    const createNodes = () => {
      nodes = [];
      const nodeCount = Math.min(SKILLS.length, 15);
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 20 + Math.random() * 15,
          name: SKILLS[i].name,
          icon: SKILLS[i].icon,
          color: `hsl(${Math.random() * 360}, 70%, 60%)`,
          targetX: Math.random() * canvas.width,
          targetY: Math.random() * canvas.height,
          ease: 0.05
        });
      }
      
      // Create connections between nodes
      connections = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() > 0.7) {
            connections.push({
              source: nodes[i],
              target: nodes[j],
              strength: Math.random() * 0.5 + 0.5
            });
          }
        }
      }
    };

    createNodes();

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Click handler
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Check if click is on a node
      for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        const dx = node.x - x;
        const dy = node.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < node.radius) {
          setSelectedSkill({
            name: node.name,
            icon: node.icon
          });
          break;
        }
      }
    };

    canvas.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      nodes.forEach(node => {
        // Move towards target with easing
        node.x += (node.targetX - node.x) * node.ease;
        node.y += (node.targetY - node.y) * node.ease;
        
        // Mouse repulsion
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          node.x += (dx / distance) * force * 2;
          node.y += (dy / distance) * force * 2;
        }
        
        // Boundary check
        if (node.x < node.radius) {
          node.x = node.radius;
          node.targetX = Math.random() * canvas.width;
        } else if (node.x > canvas.width - node.radius) {
          node.x = canvas.width - node.radius;
          node.targetX = Math.random() * canvas.width;
        }
        
        if (node.y < node.radius) {
          node.y = node.radius;
          node.targetY = Math.random() * canvas.height;
        } else if (node.y > canvas.height - node.radius) {
          node.y = canvas.height - node.radius;
          node.targetY = Math.random() * canvas.height;
        }
        
        // Occasionally change target
        if (Math.random() < 0.005) {
          node.targetX = Math.random() * canvas.width;
          node.targetY = Math.random() * canvas.height;
        }
      });
      
      // Draw connections
      connections.forEach(conn => {
        const dx = conn.source.x - conn.target.x;
        const dy = conn.source.y - conn.target.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          ctx.beginPath();
          ctx.moveTo(conn.source.x, conn.source.y);
          ctx.lineTo(conn.target.x, conn.target.y);
          ctx.strokeStyle = isDark 
            ? `rgba(99, 102, 241, ${0.2 * conn.strength * (1 - distance/200)})` 
            : `rgba(59, 130, 246, ${0.2 * conn.strength * (1 - distance/200)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      
      // Draw nodes
      nodes.forEach(node => {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 2
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Main circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
        
        // Border
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Text
        ctx.fillStyle = isDark ? '#f1f5f9' : '#0f172a';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.x, node.y);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <div className="relative w-full h-96 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-slate-700/50 shadow-neumorphism-card p-4">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full rounded-xl cursor-pointer"
      />
      
      {selectedSkill && (
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-xl p-4 border border-white/30 dark:border-slate-700/50 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="text-2xl">
              {selectedSkill.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                {selectedSkill.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Click on a skill node to view details
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 text-sm text-slate-600 dark:text-slate-400">
        Interactive Skills Visualization
      </div>
      
      {/* Neumorphism styles */}
      <style jsx>{`
        .shadow-neumorphism-card {
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1), 
                      -10px -10px 20px rgba(255, 255, 255, 0.7);
        }
        
        .dark .shadow-neumorphism-card {
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3), 
                      -10px -10px 20px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
};

export default SkillsVisualization;