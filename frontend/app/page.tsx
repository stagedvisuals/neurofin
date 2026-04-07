import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';

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

      {/* Demo Section */}
      <section className="py-20 px-6 bg-neuro-darker/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-neuro-gradient bg-clip-text text-transparent">
                Live AI Financial Dashboard
              </span>
            </h2>
            <p className="text-xl text-neuro-light/80 mb-8">
              Bekijk hoe NeuroFin je financiën transformeert in real-time.
            </p>
            
            {/* Demo Visualization */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-neuro-primary/30 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-neuro-darker to-neuro-dark flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <div className="text-2xl font-bold text-neuro-primary">Neural AI Active</div>
                  <div className="text-neuro-light/60 mt-2">Analyzing financial patterns...</div>
                </div>
              </div>
            </div>
          </div>
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
              🦀 Sovereign Architect Certified • AVG/GDPR Compliant • 256-bit Encryptie
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}