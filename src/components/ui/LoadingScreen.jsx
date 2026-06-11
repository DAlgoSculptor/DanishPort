import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTimeout(() => onComplete(), 600)
          return 100
        }
        // Increment between 6 and 18, ensuring a snappy but visible animation sequence
        const increment = Math.random() * 12 + 6
        const nextProgress = prev + increment
        return nextProgress >= 100 ? 100 : nextProgress
      })
    }, 150)

    return () => clearInterval(timer)
  }, [onComplete])

  // System log lines triggered by progress percent bounds
  const logSequence = [
    { threshold: 0, text: "[sys] initializing boot loader sequence..." },
    { threshold: 12, text: "[sys] loading Outfits & Monospace font systems..." },
    { threshold: 28, text: "[net] mapping edge middleware routing rules..." },
    { threshold: 45, text: "[db] establishing secure supabase database pools..." },
    { threshold: 62, text: "[cdn] link assets pipeline and pre-heat CDN targets..." },
    { threshold: 80, text: "[sys] core bundles resolved in 142ms. compiling layouts..." },
    { threshold: 95, text: "[info] boot complete. launching secure shell thread..." }
  ]

  const activeLogs = logSequence.filter(log => progress >= log.threshold)

  // Monospace text progress bar generation
  const barLength = 24
  const filledSegments = Math.min(barLength, Math.round((progress / 100) * barLength))
  const emptySegments = barLength - filledSegments
  const visualBar = `[${"=".repeat(filledSegments)}${" ".repeat(emptySegments)}]`

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 grid-pattern-dev px-6"
        >
          <div className="w-full max-w-md border border-zinc-800 bg-zinc-900/60 rounded-xl overflow-hidden shadow-2xl font-mono">
            
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-950/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
                <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
                <span className="text-zinc-500 text-[10px] ml-2 tracking-wider uppercase">system_init.sh</span>
              </div>
              <span className="text-zinc-650 text-[10px]">v2.45.0</span>
            </div>
            
            {/* Terminal Log Output Body */}
            <div className="p-6 space-y-4 min-h-[260px] flex flex-col justify-between">
              
              {/* Active Logs Buffer */}
              <div className="space-y-1.5 text-[10px] text-zinc-400">
                {activeLogs.map((log, index) => (
                  <div 
                    key={index}
                    className={`${index === activeLogs.length - 1 ? "text-zinc-200" : "text-zinc-500"} transition-all duration-150`}
                  >
                    {log.text}
                  </div>
                ))}
              </div>

              {/* Progress Console Section */}
              <div className="space-y-2 pt-4 border-t border-zinc-900">
                <div className="text-[11px] text-zinc-300 font-semibold tracking-widest leading-none flex justify-between">
                  <span className="text-zinc-500">progress_status</span>
                  <span className="text-indigo-400">{Math.round(progress)}%</span>
                </div>
                
                {/* Monospace Progress bar line */}
                <div className="text-xs text-zinc-450 leading-none select-none tracking-normal whitespace-pre font-mono">
                  {visualBar}
                </div>
                
                <div className="text-[9px] text-zinc-600 flex items-center justify-between">
                  <span>host: danish_nawaz_local</span>
                  <span className="animate-pulse">● online</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
