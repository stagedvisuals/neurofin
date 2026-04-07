"use client";

import { motion } from 'framer-motion';
import { Brain, Zap, Cpu, Shield, Eye, Cpu as Quantum } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Neural Budgeting",
    description: "AI leert je uitgavenpatroon en voorspelt cashflow met 94% nauwkeurigheid.",
    gradient: "from-neuro-primary to-quantum-blue",
    stats: "94% Accuracy",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Quantum Tax Optimization",
    description: "Quantum-algoritmes vinden maximale belastingaftrek in 0.1ms.",
    gradient: "from-quantum-blue to-quantum-purple",
    stats: "34-62% Savings",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AR Financial Dashboard",
    description: "Holografische 3D visualisatie van je vermogen via WebXR.",
    gradient: "from-quantum-purple to-quantum-pink",
    stats: "3D Immersive",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Autonomous Investment Agents",
    description: "AI agents die automatisch investeren op basis van je risicoprofiel.",
    gradient: "from-quantum-pink to-neuro-accent",
    stats: "24/7 Trading",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Blockchain Security",
    description: "Onkraakbare encryptie en gedecentraliseerde data opslag.",
    gradient: "from-neuro-accent to-neuro-secondary",
    stats: "256-bit AES",
  },
  {
    icon: <Quantum className="w-8 h-8" />,
    title: "Predictive Analytics",
    description: "Voorspel markttrends en kansen met machine learning modellen.",
    gradient: "from-neuro-secondary to-neuro-primary",
    stats: "30-day Forecast",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="group relative"
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          
          {/* Card */}
          <div className="relative bg-neuro-darker/50 border border-neuro-primary/20 rounded-2xl p-6 backdrop-blur-sm h-full card-3d">
            {/* Icon */}
            <div className={`mb-4 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
              <div className="text-white">
                {feature.icon}
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-neuro-light mb-3">
              {feature.title}
            </h3>
            
            <p className="text-neuro-light/70 mb-4">
              {feature.description}
            </p>
            
            {/* Stats */}
            <div className="mt-4 pt-4 border-t border-neuro-primary/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neuro-primary/60">Performance</span>
                <span className="text-neuro-primary font-semibold">{feature.stats}</span>
              </div>
              
              {/* Progress bar */}
              <div className="mt-2 h-1.5 bg-neuro-dark rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full`}
                  style={{ width: '85%' }}
                />
              </div>
            </div>
            
            {/* Hover effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-transparent via-neuro-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-4 h-4">
            <div className="absolute inset-0 bg-neuro-primary rounded-full animate-ping opacity-20" />
            <div className="absolute inset-1 bg-neuro-primary rounded-full" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}