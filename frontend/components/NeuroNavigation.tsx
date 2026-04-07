"use client";

import { useState } from 'react';
import { Brain, Zap, Shield, Cpu, BarChart3, Menu, X } from 'lucide-react';

export default function NeuroNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Neural Dashboard', icon: <Brain size={20} />, href: '#dashboard' },
    { label: 'Quantum Tax', icon: <Zap size={20} />, href: '#quantum' },
    { label: 'AR Financiën', icon: <Cpu size={20} />, href: '#ar' },
    { label: 'AI Agents', icon: <BarChart3 size={20} />, href: '#agents' },
    { label: 'Security', icon: <Shield size={20} />, href: '#security' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-neuro-primary/20 bg-neuro-darker/90 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-neuro-gradient flex items-center justify-center">
                <Brain size={24} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-quantum-blue rounded-full animate-pulse-glow" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-neuro-gradient bg-clip-text text-transparent">
                NeuroFin
              </div>
              <div className="text-xs text-neuro-primary/60">Neurale Financiële AI</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-neuro-primary/10 transition-colors group"
              >
                <span className="text-neuro-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-neuro-light/80 group-hover:text-neuro-light">
                  {item.label}
                </span>
              </a>
            ))}
            
            <button className="px-6 py-3 rounded-lg bg-neuro-gradient hover:opacity-90 font-semibold transition-all hover:scale-105">
              Start Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neuro-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neuro-primary/20 pt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neuro-primary/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-neuro-primary">{item.icon}</span>
                  <span className="text-neuro-light/80">{item.label}</span>
                </a>
              ))}
              
              <button className="w-full mt-4 px-6 py-3 rounded-lg bg-neuro-gradient hover:opacity-90 font-semibold">
                Start Gratis
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Animated border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-neuro-primary to-transparent animate-pulse" />
    </nav>
  );
}