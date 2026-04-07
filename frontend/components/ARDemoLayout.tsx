"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, Maximize2, Smartphone, Globe, Box } from 'lucide-react';

export default function ARDemoLayout() {
  const [arMode, setArMode] = useState('financial');
  const [deviceType, setDeviceType] = useState('mobile');

  const arScenes = [
    { id: 'financial', label: 'Financiële Data', icon: <Box />, color: 'from-neuro-primary to-quantum-blue' },
    { id: 'portfolio', label: 'Portfolio 3D', icon: <Globe />, color: 'from-quantum-purple to-neuro-accent' },
    { id: 'market', label: 'Markt Visualisatie', icon: <Zap />, color: 'from-neuro-accent to-neuro-secondary' },
  ];

  const devices = [
    { id: 'mobile', label: 'Smartphone', icon: <Smartphone /> },
    { id: 'tablet', label: 'Tablet', icon: <Maximize2 /> },
    { id: 'desktop', label: 'Desktop AR', icon: <Eye /> },
  ];

  return (
    <div className="bg-neuro-darker/50 border border-neuro-primary/30 rounded-2xl p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neuro-secondary to-neuro-accent flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-neuro-secondary">AR Financial Demo</h3>
            <p className="text-neuro-light/60">Augmented Reality financiële visualisatie</p>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-neuro-secondary/20 text-neuro-secondary text-sm font-semibold">
          WebXR Ready
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AR Scene Selector */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-neuro-light mb-4">AR Scènes</h4>
            <div className="space-y-3">
              {arScenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => setArMode(scene.id)}
                  className={`w-full p-4 rounded-xl border transition-all text-left ${
                    arMode === scene.id
                      ? `border-neuro-secondary bg-gradient-to-r ${scene.color}/10`
                      : 'border-neuro-primary/20 hover:border-neuro-primary/40'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${scene.color} flex items-center justify-center`}>
                      <div className="text-white">
                        {scene.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-neuro-light">{scene.label}</div>
                      <div className="text-sm text-neuro-light/60">
                        {scene.id === 'financial' && '3D data visualisatie'}
                        {scene.id === 'portfolio' && 'Interactieve portfolio'}
                        {scene.id === 'market' && 'Live markt data'}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Device Selector */}
          <div>
            <h4 className="text-lg font-semibold text-neuro-light mb-4">Apparaat Type</h4>
            <div className="grid grid-cols-3 gap-2">
              {devices.map((device) => (
                <button
                  key={device.id}
                  onClick={() => setDeviceType(device.id)}
                  className={`p-3 rounded-lg border flex flex-col items-center transition-all ${
                    deviceType === device.id
                      ? 'border-neuro-secondary bg-neuro-secondary/10'
                      : 'border-neuro-primary/20 hover:border-neuro-primary/40'
                  }`}
                >
                  <div className={`mb-2 ${deviceType === device.id ? 'text-neuro-secondary' : 'text-neuro-light/60'}`}>
                    {device.icon}
                  </div>
                  <div className={`text-sm ${deviceType === device.id ? 'text-neuro-secondary font-medium' : 'text-neuro-light/60'}`}>
                    {device.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* AR Features */}
          <div className="border border-neuro-primary/20 rounded-xl p-4">
            <h4 className="text-lg font-semibold text-neuro-light mb-3">AR Features</h4>
            <ul className="space-y-2">
              {[
                '3D Data Visualisatie',
                'Hand tracking interactie',
                'Spatial audio feedback',
                'Multi-user collaboration',
                'Real-time data streaming',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center text-neuro-light/80">
                  <div className="w-2 h-2 rounded-full bg-neuro-secondary mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AR Visualization Preview */}
        <div className="lg:col-span-2">
          <div className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-neuro-secondary/30">
            {/* AR Scene Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neuro-darker to-neuro-dark">
              {/* 3D Grid */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                }}
              />

              {/* AR Content based on selected mode */}
              <div className="absolute inset-0 flex items-center justify-center">
                {arMode === 'financial' && (
                  <div className="text-center">
                    <div className="relative w-48 h-48 mx-auto">
                      {/* 3D Financial Chart */}
                      <div className="absolute inset-0">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute bottom-0 bg-gradient-to-t from-neuro-primary to-transparent rounded-t"
                            style={{
                              left: `${i * 8}%`,
                              width: '6%',
                              height: `${30 + Math.sin(i * 0.5) * 20}%`,
                              transform: `translateX(-50%)`,
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Floating data points */}
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-neuro-primary animate-pulse"
                          style={{
                            left: `${Math.random() * 90}%`,
                            top: `${Math.random() * 90}%`,
                            animationDelay: `${i * 0.3}s`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="mt-6 text-xl font-bold text-neuro-primary">
                      3D Financiële Data
                    </div>
                    <div className="text-neuro-light/60 mt-2">
                      Interactieve data exploration in augmented reality
                    </div>
                  </div>
                )}

                {arMode === 'portfolio' && (
                  <div className="text-center">
                    <div className="relative w-48 h-48 mx-auto">
                      {/* 3D Portfolio Sphere */}
                      <div className="absolute inset-0 rounded-full border-2 border-neuro-secondary/50 animate-spin-slow">
                        <div className="absolute inset-8 rounded-full border border-neuro-accent/30 animate-spin-slow-reverse" />
                      </div>
                      
                      {/* Portfolio segments */}
                      {['AEX', 'Tech', 'Energy', 'Finance'].map((segment, i) => (
                        <div
                          key={i}
                          className="absolute w-16 h-16 rounded-lg bg-gradient-to-br from-neuro-primary/30 to-neuro-secondary/30 border border-neuro-primary/50 backdrop-blur-sm flex items-center justify-center"
                          style={{
                            left: `${50 + Math.cos(i * Math.PI / 2) * 40}%`,
                            top: `${50 + Math.sin(i * Math.PI / 2) * 40}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        >
                          <div className="text-center">
                            <div className="text-xs font-bold text-neuro-light">{segment}</div>
                            <div className="text-xs text-neuro-light/60">{25}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-xl font-bold text-neuro-secondary">
                      3D Portfolio Visualisatie
                    </div>
                    <div className="text-neuro-light/60 mt-2">
                      Draai en zoom in je investeringen in 3D
                    </div>
                  </div>
                )}

                {arMode === 'market' && (
                  <div className="text-center">
                    <div className="relative w-48 h-48 mx-auto">
                      {/* Live Market Visualization */}
                      <div className="absolute inset-0">
                        {/* Market flow lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <path
                              key={i}
                              d={`M ${i * 8} 100 Q ${i * 8 + 20} ${50 - i * 3} ${i * 8 + 40} 0`}
                              stroke="url(#market-gradient)"
                              strokeWidth="2"
                              fill="none"
                              className="animate-pulse"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                          <defs>
                            <linearGradient id="market-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FF6B9D" />
                              <stop offset="100%" stopColor="#7B61FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      
                      {/* Floating market indicators */}
                      {['📈', '💹', '📊', '🔺'].map((emoji, i) => (
                        <div
                          key={i}
                          className="absolute text-2xl animate-float"
                          style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + Math.sin(i) * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                          }}
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-xl font-bold text-neuro-accent">
                      Live Markt Stroom
                    </div>
                    <div className="text-neuro-light/60 mt-2">
                      Real-time data visualisatie in augmented reality
                    </div>
                  </div>
                )}
              </div>

              {/* AR Overlay Elements */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-neuro-darker/80 backdrop-blur-sm border border-neuro-secondary/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-neuro-light">AR Active</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-neuro-darker/80 backdrop-blur-sm border border-neuro-secondary/30">
                <div className="text-sm text-neuro-light">
                  {deviceType === 'mobile' && '📱 Mobile AR'}
                  {deviceType === 'tablet' && '📟 Tablet AR'}
                  {deviceType === 'desktop' && '🖥️ Desktop AR'}
                </div>
              </div>
            </div>
          </div>

          {/* AR Controls */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="px-4 py-3 rounded-lg border border-neuro-primary/30 hover:border-neuro-primary/60 bg-neuro-dark/30 transition-colors">
              <div className="text-center">
                <div className="text-neuro-light font-medium">Start AR</div>
                <div className="text-xs text-neuro-light/60">WebXR sessie</div>
              </div>
            </button>
            
            <button className="px-4 py-3 rounded-lg border border-neuro-primary/30 hover:border-neuro-primary/60 bg-neuro-dark/30 transition-colors">
              <div className="text-center">
                <div className="text-neuro-light font-medium">Export 3D</div>
                <div className="text-xs text-neuro-light/60">GLB format</div>
              </div>
            </button>
            
            <button className="px-4 py-3 rounded-lg border border-neuro-primary/30 hover:border-neuro-primary/60 bg-neuro-dark/30 transition-colors">
              <div className="text-center">
                <div className="text-neuro-light font-medium">Share</div>
                <div className="text-xs text-neuro-light/60">Multi-user</div>
              </div>
            </button>
            
            <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-neuro-secondary to-neuro-accent hover:opacity-90 transition-opacity">
              <div className="text-center text-white font-medium">Fullscreen</div>
            </button>
          </div>

          {/* Technical Requirements */}
          <div className="mt-6 border-t border-neuro-primary/20 pt-6">
            <h4 className="text-lg font-semibold text-neuro-light mb-3">Technische Vereisten</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 rounded-lg bg-neuro-dark/30">
                <div className="text-neuro-light font-medium">WebXR</div>
                <div className="text-neuro-light/60">API Level 1.1</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-neuro-dark/30">
                <div className="text-neuro-light font-medium">WebGL 2.0</div>
                <div className="text-neuro-light/60">GPU accelerated</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-neuro-dark/30">
                <div className="text-neuro-light font-medium">60 FPS</div>
                <div className="text-neuro-light/60">Smooth rendering</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-neuro-dark/30">
                <div className="text-neuro-light font-medium">Spatial Audio</div>
                <div className="text-neuro-light/60">WebAudio API</div>
              </div>
            </div>
          </div>
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}