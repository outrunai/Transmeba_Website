/**
 * Página "Nosotros" de Transmeba S.A.
 *
 * NOTA PARA MIGRACIÓN A STRAPI CMS:
 * - Actualmente consume datos estáticos de lib/data.ts
 * - Para integrar Strapi, reemplazar imports por llamadas a lib/strapi.ts:
 *   - values → await getValues()
 * - Convertir componente a async function y usar Server Components
 */

import type { Metadata } from 'next';
import HistorySection from '@/components/sections/HistorySection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import Card from '@/components/ui/Card';
import { values } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Nosotros | Transmeba S.A.',
  description:
    'Conoce la historia de Transmeba S.A., empresa fundada en 1972. Nuestra misión, visión y valores corporativos que nos han convertido en líderes del transporte intermunicipal en Antioquia.',
  keywords: [
    'historia Transmeba',
    'misión',
    'visión',
    'valores corporativos',
    'transporte Antioquia',
  ],
  openGraph: {
    title: 'Nosotros | Transmeba S.A.',
    description:
      'Conoce la historia de Transmeba S.A., empresa fundada en 1972. Nuestra misión, visión y valores corporativos que nos han convertido en líderes del transporte intermunicipal en Antioquia.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Transmeba S.A.',
  },
  twitter: {
    card: 'summary',
    title: 'Nosotros | Transmeba S.A.',
    description:
      'Conoce la historia de Transmeba S.A., empresa fundada en 1972. Nuestra misión, visión y valores corporativos que nos han convertido en líderes del transporte intermunicipal en Antioquia.',
  },
  alternates: {
    canonical: '/nosotros',
  },
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nosotros
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Más de 50 años conectando comunidades con compromiso y excelencia
          </p>
        </div>
      </section>

      <HistorySection />
      <MissionVisionSection />

      {/* Valores Corporativos */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto">
              Los principios que guían nuestro actuar diario
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card
                key={value.id}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
