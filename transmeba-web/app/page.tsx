/**
 * Página de inicio de Transmeba S.A.
 *
 * NOTA PARA MIGRACIÓN A STRAPI CMS:
 * - Actualmente consume datos estáticos de lib/data.ts y lib/constants.ts
 * - Para integrar Strapi, reemplazar imports por llamadas a lib/strapi.ts:
 *   - companyInfo → await getCompanyInfo()
 *   - services → await getServices()
 *   - values → await getValues()
 *   - certifications → await getCertifications()
 * - Convertir componente a async function y usar Server Components
 * - Implementar revalidación con revalidate: 3600 (1 hora)
 */

import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import HSEQSection from '@/components/sections/HSEQSection';
import Card from '@/components/ui/Card';
import { values } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Transmeba S.A. | Transporte Medellín - Barbosa desde 1972',
  description:
    'Empresa líder en transporte público intermunicipal. Más de 50 años conectando Medellín y Barbosa con seguridad, calidad y certificaciones ISO 9001, ISO 14001, ISO 39001.',
  keywords: [
    'transporte público',
    'Medellín',
    'Barbosa',
    'ISO 9001',
    'ISO 14001',
    'ISO 39001',
    'transporte intermunicipal',
    'Antioquia',
  ],
  openGraph: {
    title: 'Transmeba S.A. | Transporte Medellín - Barbosa desde 1972',
    description:
      'Empresa líder en transporte público intermunicipal. Más de 50 años conectando Medellín y Barbosa con seguridad, calidad y certificaciones ISO 9001, ISO 14001, ISO 39001.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Transmeba S.A.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transmeba S.A. | Transporte Medellín - Barbosa desde 1972',
    description:
      'Empresa líder en transporte público intermunicipal. Más de 50 años conectando Medellín y Barbosa con seguridad, calidad y certificaciones ISO 9001, ISO 14001, ISO 39001.',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <ServicesGrid />

      {/* Sección de Valores Corporativos */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary-900">
              Nuestros Valores
            </h2>
            <p className="text-base md:text-lg text-secondary-600 text-center max-w-3xl mx-auto">
              Los principios que guían nuestro actuar diario y definen nuestra
              cultura organizacional.
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

      <HSEQSection />
    </>
  );
}
