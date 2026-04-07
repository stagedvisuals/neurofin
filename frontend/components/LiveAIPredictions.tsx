"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity, Cpu, BarChart3 } from 'lucide-react';

export default function LiveAIPredictions() {
  const [predictions, setPredictions] = useState([
    { id: 1, asset: 'AEX Index', current: 825, predicted: 842, change: 2.1, confidence: 94.2 },
    { id: 2, asset: 'EUR/USD', current: 1.085, predicted: 1.092, change: 0.65, confidence: 88.7 },
    { id: 3, asset: 'ASML', current: 945, predicted: 978, change: 3.5, confidence: 91.5 },
    { id: 4, asset: 'ING Bank', current: 16.8, predicted: 17.4, change: 3.6, confidence: 86.3 },
    { id: 5, asset: 'Shell', current: 32.5, predicted: 33.8, change: 4.0, confidence: 89.1 },
  ]);

  const [marketSentiment, setMarketSentiment] = useState(72.4);
  const [neuralActivity, setNeuralActivity] = useState(0);

  // Simuleer live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update predictions
      setPredictions(prev => prev.map(p => ({
        ...p,
        predicted: p.predicted * (1 + (Math.random() - 0.5) * 0.002),
        confidence: Math.min(99, Math.max(85, p.confidence + (Math.random() - 0.5) * 0.3)),
      })));

      // Update market sentiment
      setMarketSentiment(prev => {
        const change = (Math.random() - 0.5) * 0.5;
        return Math.min(100, Math.max(0, prev + change));
      });

      // Neural activity animation
      setNeuralActivity(Date.now() % 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neuro-darker/50 border border-neuro-primary/30 rounded-2xl p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neuro-accent to-neuro-secondary flex items-center justify-center">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-neuro-accent">Live AI Predictions</h3>
            <p className="text-neuro-light/60">Real-time financiële trend voorspellingen</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Activity size={14} className="text-green-400" />
            <span className="text-sm text-neuro-light/60">Live</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Market Sentiment */}
        <div className="lg:col-span-1">
          <div className="bg-neuro-dark/30 border border-neuro-primary/20 rounded-xl p-5 h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <BarChart3 size={20} className="text-neuro-accent" />
                <h4 className="text-lg font-semibold text-neuro-light">Markt Sentiment</h4>
              </div>
              <div className="text-2xl font-bold text-neuro-accent">
                {marketSentiment.toFixed(1)}%
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-neuro-light/60 mb-1">
                <span>Bearish</span>
                <span>Bullish</span>
              </div>
              <div className="h-3 bg-neuro-dark rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${marketSentiment}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-red-400">0%</span>
                <span className="text-xs text-yellow-400">50%</span>
                <span className="text-xs text-green-400">100%</span>
              </div>
            </div>

            {/* Neural Activity Visualization */}
            <div className="mt-6">
              <div className="text-sm text-neuro-light/60 mb-3">Neural Network Activity</div>
              <div className="h-20 relative">
                {/* Neural network lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={`${(i + 1) * 12}%`}
                      x2="100%"
                      y2={`${(i + 1) * 12}%`}
                      stroke="rgba(0, 212, 255, 0.1)"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Animated pulse */}
                  <circle
                    cx={`${neuralActivity}%`}
                    cy="50%"
                    r="4"
                    fill="url(#pulse-gradient)"
                    className="animate-pulse"
                  >
                    <animate
                      attributeName="r"
                      values="4;8;4"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  
                  <defs>
                    <radialGradient id="pulse-gradient">
                      <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FF6B9D" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Predictions Table */}
        <div className="lg:col-span-2">
          <div className="bg-neuro-dark/30 border border-neuro-primary/20 rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 p-4 border-b border-neuro-primary/20 bg-neuro-dark/50">
              <div className="font-semibold text-neuro-light">Asset</div>
              <div className="font-semibold text-neuro-light text-right">Huidig</div>
              <div className="font-semibold text-neuro-light text-right">Voorspeld</div>
              <div className="font-semibold text-neuro-light text-right">Verandering</div>
              <div className="font-semibold text-neuro-light text-right">Betrouwbaarheid</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-neuro-primary/10">
              {predictions.map((prediction) => (
                <motion.div
                  key={prediction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-5 gap-4 p-4 hover:bg-neuro-primary/5 transition-colors"
                >
                  <div className="font-medium text-neuro-light">{prediction.asset}</div>
                  
                  <div className="text-right">
                    <div className="text-neuro-light">
                      {prediction.asset.includes('EUR/USD') ? '$' : '€'}
                      {prediction.current.toLocaleString('nl-NL', { 
                        minimumFractionDigits: prediction.asset.includes('EUR/USD') ? 3 : 0,
                        maximumFractionDigits: prediction.asset.includes('EUR/USD') ? 3 : 0
                      })}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-semibold text-neuro-light">
                      {prediction.asset.includes('EUR/USD') ? '$' : '€'}
                      {prediction.predicted.toLocaleString('nl-NL', { 
                        minimumFractionDigits: prediction.asset.includes('EUR/USD') ? 3 : 0,
                        maximumFractionDigits: prediction.asset.includes('EUR/USD') ? 3 : 0
                      })}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`inline-flex items-center ${prediction.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {prediction.change >= 0 ? (
                        <TrendingUp size={16} className="mr-1" />
                      ) : (
                        <TrendingDown size={16} className="mr-1" />
                      )}
                      {prediction.change >= 0 ? '+' : ''}{prediction.change.toFixed(1)}%
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <div className="w-16 bg-neuro-dark rounded-full h-2">
                        <div 
                          className="h-full bg-gradient-to-r from-neuro-accent to-neuro-secondary rounded-full"
                          style={{ width: `${prediction.confidence}%` }}
                        />
                      </div>
                      <span className="text-neuro-light/80 font-medium w-10">
                        {prediction.confidence.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Prediction Insights */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neuro-dark/30 border border-neuro-primary/20 rounded-lg p-4">
              <div className="text-sm text-neuro-light/60 mb-1">AI Model</div>
              <div className="text-lg font-semibold text-neuro-light">Transformer-NN</div>
              <div className="text-xs text-neuro-light/40 mt-1">384 layers, 8.2B parameters</div>
            </div>
            
            <div className="bg-neuro-dark/30 border border-neuro-primary/20 rounded-lg p-4">
              <div className="text-sm text-neuro-light/60 mb-1">Update Frequentie</div>
              <div className="text-lg font-semibold text-neuro-light">3 seconden</div>
              <div className="text-xs text-neuro-light/40 mt-1">Real-time data streams</div>
            </div>
            
            <div className="bg-neuro-dark/30 border border-neuro-primary/20 rounded-lg p-4">
              <div className="text-sm text-neuro-light/60 mb-1">Gemiddelde Nauwkeurigheid</div>
              <div className="text-lg font-semibold text-neuro-light">89.8%</div>
              <div className="text-xs text-neuro-light/40 mt-1">30-dagen backtest</div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 text-xs text-neuro-light/40">
            <p>⚠️ Deze voorspellingen zijn gegenereerd door AI modellen voor educatieve doeleinden. 
            Ze vormen geen financieel advies. Beleggen brengt risico's met zich mee. 
            NeuroFin gebruikt historische data en machine learning voor trendanalyse, geen garanties voor toekomstige prestaties.</p>
          </div>
        </div>
      </div>
    </div>
  );
}