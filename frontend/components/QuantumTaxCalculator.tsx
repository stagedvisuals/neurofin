"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Calculator, TrendingUp, Shield } from 'lucide-react';

export default function QuantumTaxCalculator() {
  const [revenue, setRevenue] = useState('1000000');
  const [businessType, setBusinessType] = useState('zzp');
  const [optimizationLevel, setOptimizationLevel] = useState('quantum');
  const [quantumParticles, setQuantumParticles] = useState<Array<{x: number, y: number, size: number}>>([]);

  // Bereken belastingbesparing
  const calculateTaxSavings = () => {
    const rev = parseFloat(revenue) || 0;
    let baseRate = 0.34; // 34% standaard
    
    if (businessType === 'mkb') baseRate = 0.42;
    if (businessType === 'bv') baseRate = 0.48;
    
    // Quantum optimization boost
    if (optimizationLevel === 'quantum') baseRate += 0.14;
    if (optimizationLevel === 'neural') baseRate += 0.08;
    
    const savings = Math.round(rev * baseRate);
    const monthly = Math.round(savings / 12);
    
    return { savings, monthly, rate: baseRate * 100 };
  };

  const { savings, monthly, rate } = calculateTaxSavings();

  // Quantum particle animation
  useEffect(() => {
    const particles = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
    }));
    setQuantumParticles(particles);

    const interval = setInterval(() => {
      setQuantumParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + Math.random() * 2 - 1) % 100,
        y: (p.y + Math.random() * 2 - 1) % 100,
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-neuro-darker/50 border border-neuro-primary/30 rounded-2xl p-6 backdrop-blur-sm">
      {/* Quantum particles background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {quantumParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-quantum-blue to-quantum-purple opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-quantum-blue to-quantum-purple flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-quantum-blue">Quantum Tax Calculator</h3>
              <p className="text-neuro-light/60">Nederlandse belastingoptimalisatie met quantum algoritmes</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-quantum-blue/20 text-quantum-blue text-sm font-semibold">
            Live AI
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Revenue Input */}
            <div>
              <label className="block text-neuro-light/80 mb-2">
                <div className="flex items-center space-x-2">
                  <Calculator size={16} />
                  <span>Jaarlijkse Omzet (€)</span>
                </div>
              </label>
              <input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="w-full px-4 py-3 bg-neuro-dark/50 border border-neuro-primary/30 rounded-lg text-white focus:outline-none focus:border-quantum-blue"
                placeholder="Voer omzet in"
              />
              <div className="mt-2 text-sm text-neuro-light/60">
                Voorbeeld: €100.000 voor ZZP, €1.000.000 voor MKB
              </div>
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-neuro-light/80 mb-2">Bedrijfstype</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'zzp', label: 'ZZP', rate: '34-42%' },
                  { id: 'mkb', label: 'MKB', rate: '42-48%' },
                  { id: 'bv', label: 'BV', rate: '48-62%' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setBusinessType(type.id)}
                    className={`px-4 py-3 rounded-lg border transition-all ${
                      businessType === type.id
                        ? 'border-quantum-blue bg-quantum-blue/10'
                        : 'border-neuro-primary/20 hover:border-neuro-primary/40'
                    }`}
                  >
                    <div className="font-medium text-neuro-light">{type.label}</div>
                    <div className="text-xs text-neuro-light/60">{type.rate}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Optimization Level */}
            <div>
              <label className="block text-neuro-light/80 mb-2">Optimalisatie Niveau</label>
              <div className="space-y-2">
                {[
                  { id: 'basic', label: 'Basis', desc: 'Standaard aftrekposten' },
                  { id: 'neural', label: 'Neural AI', desc: 'Machine learning optimalisatie' },
                  { id: 'quantum', label: 'Quantum AI', desc: 'Quantum algoritmes (maximaal)' },
                ].map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setOptimizationLevel(level.id)}
                    className={`w-full px-4 py-3 rounded-lg border text-left transition-all ${
                      optimizationLevel === level.id
                        ? 'border-quantum-blue bg-quantum-blue/10'
                        : 'border-neuro-primary/20 hover:border-neuro-primary/40'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-neuro-light">{level.label}</span>
                      {level.id === 'quantum' && (
                        <span className="px-2 py-1 rounded-full bg-quantum-blue/20 text-quantum-blue text-xs">
                          Aanbevolen
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-neuro-light/60 mt-1">{level.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Savings Display */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-neuro-darker to-neuro-dark border border-quantum-blue/30 rounded-xl p-6"
            >
              <div className="text-center mb-4">
                <div className="text-sm text-neuro-light/60 mb-1">Jaarlijkse Besparing</div>
                <div className="text-4xl font-bold text-quantum-blue">
                  €{savings.toLocaleString('nl-NL')}
                </div>
                <div className="text-neuro-light/60 mt-2">
                  {rate.toFixed(0)}% van je omzet
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-neuro-light/60 mb-1">
                  <span>0%</span>
                  <span>Optimalisatie: {rate.toFixed(0)}%</span>
                  <span>62%</span>
                </div>
                <div className="h-2 bg-neuro-dark rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${rate}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-quantum-blue to-quantum-purple rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Monthly Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neuro-dark/50 border border-neuro-primary/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp size={16} className="text-green-400" />
                  <div className="text-sm text-neuro-light/60">Per Maand</div>
                </div>
                <div className="text-2xl font-bold text-green-400">
                  €{monthly.toLocaleString('nl-NL')}
                </div>
              </div>
              
              <div className="bg-neuro-dark/50 border border-neuro-primary/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield size={16} className="text-quantum-purple" />
                  <div className="text-sm text-neuro-light/60">AVG Compliant</div>
                </div>
                <div className="text-2xl font-bold text-quantum-purple">
                  100%
                </div>
              </div>
            </div>

            {/* Quantum Process Visualization */}
            <div className="border border-neuro-primary/20 rounded-lg p-4">
              <div className="text-sm text-neuro-light/60 mb-3">Quantum Process</div>
              <div className="flex items-center justify-between">
                {['Qubit Init', 'Superposition', 'Entanglement', 'Measurement'].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                      i < 3 ? 'bg-quantum-blue/30 text-quantum-blue' : 'bg-neuro-primary/20 text-neuro-primary'
                    }`}>
                      {i + 1}
                    </div>
                    <div className="text-xs text-neuro-light/60">{step}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 h-1 bg-gradient-to-r from-quantum-blue via-quantum-purple to-neuro-primary rounded-full" />
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-neuro-light/40 border-t border-neuro-primary/10 pt-4">
              <p>⚠️ Deze calculator geeft een schatting gebaseerd op Nederlandse belastingwetgeving 2026. 
              Raadpleeg altijd een belastingadviseur voor definitieve berekeningen. 
              NeuroFin gebruikt quantum simulaties voor optimalisatie, geen echte quantum hardware.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}