"use client";

import { motion } from 'framer-motion';
import { Brain, Zap, Shield, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-quantum-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quantum-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-neuro-primary/10 border border-neuro-primary/30 mb-6">
                <span className="text-neuro-primary text-sm font-semibold">
                  🚀 EERSTE IN NEDERLAND
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block">Je Neurale</span>
                <span className="bg-neuro-gradient bg-clip-text text-transparent">
                  Financiële AI
                </span>
                <span className="block">Assistant</span>
              </h1>
              
              <p className="text-xl text-neuro-light/80 mb-8 max-w-2xl">
                NeuroFin combineert <span className="text-neuro-primary font-semibold">quantum computing</span>, 
                <span className="text-quantum-purple font-semibold"> neural networks</span>, en 
                <span className="text-quantum-pink font-semibold"> augmented reality</span> voor 
                jouw financiële vrijheid. 34-62% belastingbesparing, automatische investeringen, 
                24/7 AI monitoring.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {[
                { value: '34-62%', label: 'Belastingbesparing', icon: <TrendingUp /> },
                { value: '24/7', label: 'AI Monitoring', icon: <Brain /> },
                { value: '256-bit', label: 'Encryptie', icon: <Shield /> },
                { value: '0.1ms', label: 'Quantum Speed', icon: <Zap /> },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-neuro-darker/50 border border-neuro-primary/20 rounded-xl p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-neuro-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-neuro-light">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-neuro-light/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 rounded-xl bg-neuro-gradient hover:opacity-90 font-semibold text-lg transition-all hover:scale-105">
                Start 14 Dagen Gratis
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-neuro-primary hover:bg-neuro-primary/10 font-semibold text-lg transition-all">
                Live Demo Bekijken
              </button>
            </motion.div>

            <p className="mt-6 text-neuro-light/60 text-sm">
              🦀 Geen creditcard nodig • AVG/GDPR compliant • Nederlands ontwikkeld
            </p>
          </div>

          {/* Right Column - 3D Visualization Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-neuro-primary/30">
              {/* 3D Visualization Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-neuro-darker to-neuro-dark flex items-center justify-center">
                {/* Neural Network Visualization */}
                <div className="relative w-full h-full">
                  {/* Animated nodes */}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-neuro-primary animate-pulse"
                      style={{
                        left: `${Math.random() * 90}%`,
                        top: `${Math.random() * 90}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <line
                        key={i}
                        x1={`${Math.random() * 100}%`}
                        y1={`${Math.random() * 100}%`}
                        x2={`${Math.random() * 100}%`}
                        y2={`${Math.random() * 100}%`}
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        className="neural-line"
                      />
                    ))}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00D4FF" />
                        <stop offset="50%" stopColor="#7B61FF" />
                        <stop offset="100%" stopColor="#FF6B9D" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Center brain */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-4 border-neuro-primary/30 animate-spin-slow">
                        <div className="absolute inset-4 rounded-full border-2 border-quantum-blue/50 animate-spin-slow-reverse" />
                      </div>
                      <Brain className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-neuro-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-neuro-darker/80 backdrop-blur-sm border border-neuro-primary/20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-neuro-light">Live AI Analysis</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-neuro-darker/80 backdrop-blur-sm border border-neuro-primary/20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-quantum-blue animate-pulse" />
                  <span className="text-sm text-neuro-light">Quantum Mode: Active</span>
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-neuro-gradient rounded-3xl blur-3xl opacity-20 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
}