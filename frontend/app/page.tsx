import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import QuantumTaxCalculator from '@/components/QuantumTaxCalculator';
import LiveAIPredictions from '@/components/LiveAIPredictions';
import ARDemoLayout from '@/components/ARDemoLayout';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <HeroSection />
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-neuro-gradient bg-clip-text text-transparent">
              5 Revolutionaire Technologieën
            </span>
          </h2>
          <p className="text-xl text-neuro-light/80 text-center mb-12 max-w-3xl mx-auto">
            NeuroFin combineert de meest geavanceerde AI technologieën voor jouw financiële vrijheid.
          </p>
          <FeaturesGrid />
        </div>
      </section>

      {/* Quantum Tax Calculator */}
      <section id="quantum-tax" className="py-20 px-6 bg-neuro-darker/50">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-quantum-blue to-quantum-purple bg-clip-text text-transparent">
                Quantum Tax Optimization
              </span>
            </h2>
            <p className="text-xl text-neuro-light/80 text-center mb-8 max-w-3xl mx-auto">
              Bereken je maximale belastingbesparing met quantum-algoritmes. 34-62% besparing mogelijk voor Nederlandse ondernemers.
            </p>
          </div>
          <QuantumTaxCalculator />
        </div>
      </section>

      {/* Live AI Predictions */}
      <section id="ai-predictions" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-neuro-accent to-neuro-secondary bg-clip-text text-transparent">
                Live AI Predictions
              </span>
            </h2>
            <p className="text-xl text-neuro-light/80 text-center mb-8 max-w-3xl mx-auto">
              Real-time financiële trend voorspellingen met neurale netwerken. 89.8% gemiddelde nauwkeurigheid.
            </p>
          </div>
          <LiveAIPredictions />
        </div>
      </section>

      {/* AR Financial Demo */}
      <section id="ar-demo" className="py-20 px-6 bg-neuro-darker/50">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-neuro-secondary to-neuro-accent bg-clip-text text-transparent">
                AR Financial Demo
              </span>
            </h2>
            <p className="text-xl text-neuro-light/80 text-center mb-8 max-w-3xl mx-auto">
              Ervaar je financiën in augmented reality. 3D visualisatie, interactieve portfolio's, en spatial data exploration.
            </p>
          </div>
          <ARDemoLayout />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-quantum-gradient opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-neuro-gradient bg-clip-text text-transparent">
                Start Jouw Neurale Financiële Reis
              </span>
            </h2>
            <p className="text-xl text-neuro-light/80 mb-8">
              Sluit je aan bij duizenden Nederlanders die hun financiën hebben getransformeerd met AI.
              Geen creditcard nodig voor de gratis proefperiode.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-neuro-gradient hover:opacity-90 font-semibold text-lg transition-all hover:scale-105">
                Start 14 Dagen Gratis
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-neuro-primary hover:bg-neuro-primary/10 font-semibold text-lg transition-all">
                Demo Bekijken
              </button>
            </div>
            <p className="mt-6 text-neuro-light/60 text-sm">
              🦀 Sovereign Architect Certified • AVG/GDPR Compliant • 256-bit Encryptie • 100% Nederlands
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}