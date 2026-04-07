import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NeuroNavigation from '@/components/NeuroNavigation'
import MatrixBackground from '@/components/MatrixBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeuroFin | Je Neurale Financiële AI Assistant',
  description: 'De eerste neurale financiële AI assistant van Nederland. Quantum tax optimization, neural budgeting, autonomous investment agents.',
  keywords: ['AI', 'financiën', 'Nederland', 'quantum', 'neural', 'belasting', 'investeren'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <MatrixBackground />
        <div className="neuro-grid" />
        
        <div className="min-h-screen flex flex-col">
          <NeuroNavigation />
          
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="border-t border-neuro-primary/20 py-8 px-6">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-neuro-primary mb-4">NeuroFin</h3>
                  <p className="text-neuro-light/60">
                    De eerste neurale financiële AI assistant van Nederland.
                    AVG/GDPR compliant • Quantum secured • 24/7 operationeel
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-neuro-light mb-4">Technologie</h4>
                  <ul className="space-y-2 text-neuro-light/60">
                    <li>• Neural Network AI</li>
                    <li>• Quantum Computing</li>
                    <li>• Augmented Reality</li>
                    <li>• Blockchain Security</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-neuro-light mb-4">Contact</h4>
                  <p className="text-neuro-light/60">
                    🦀 Sovereign Architect Certified<br />
                    Amsterdam, Nederland<br />
                    contact@neurofin.ai
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-neuro-primary/10 text-center text-neuro-light/40">
                <p>© 2026 NeuroFin. Alle rechten voorbehouden. | AVG/GDPR compliant | KvK: 12345678</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}