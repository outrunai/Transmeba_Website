/**
 * Página "Servicios" de Transmeba S.A.
 *
 * NOTA PARA MIGRACIÓN A STRAPI CMS:
 * - Actualmente consume datos estáticos de lib/data.ts
 * - Para integrar Strapi, reemplazar imports por llamadas a lib/strapi.ts:
 *   - services → await getServices()
 *   - routes → await getRoutes()
 * - Convertir componente a async function y usar Server Components
 * - Agregar función getRoutes() en lib/strapi.ts siguiendo el patrón existente
 */

import type { Metadata } from 'next';
import ServicesGrid from '@/components/sections/ServicesGrid';
import { routes } from '@/lib/data';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios de Transporte | Transmeba S.A.',
  description:
    'Transporte metropolitano Medellín-Barbosa y servicio especial empresarial. Rutas frecuentes, flota moderna y conductores certificados. Consulta horarios y frecuencias.',
  keywords: [
    'transporte Medellín Barbosa',
    'servicio empresarial',
    'rutas',
    'horarios',
    'transporte público',
  ],
  openGraph: {
    title: 'Servicios de Transporte | Transmeba S.A.',
    description:
      'Transporte metropolitano Medellín-Barbosa y servicio especial empresarial. Rutas frecuentes, flota moderna y conductores certificados.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Transmeba S.A.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Transporte | Transmeba S.A.',
    description:
      'Transporte metropolitano Medellín-Barbosa y servicio especial empresarial.',
  },
  alternates: {
    canonical: '/servicios',
  },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Soluciones de transporte confiables y seguras para cada necesidad
          </p>
        </div>
      </section>

      <ServicesGrid />

      {/* Rutas Disponibles */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Rutas Disponibles
            </h2>
            <p className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto">
              Consulta nuestras rutas, frecuencias y tiempos estimados de viaje
            </p>
          </div>

          <div className="space-y-6">
            {routes.map((route) => (
              <div
                key={route.id}
                className="bg-secondary-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary-500 shrink-0" />
                    <span className="text-lg md:text-xl font-semibold text-secondary-900">
                      {route.origin} → {route.destination}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-secondary-500 shrink-0" />
                      <div>
                        <p className="text-xs text-secondary-500">Frecuencia</p>
                        <p className="text-sm md:text-base font-medium text-secondary-800">
                          {route.frequency}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-5 h-5 text-secondary-500 shrink-0" />
                      <div>
                        <p className="text-xs text-secondary-500">Duración</p>
                        <p className="text-sm md:text-base font-medium text-secondary-800">
                          {route.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-50 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
            ¿Necesitas más información?
          </h2>
          <p className="text-base md:text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para conocer más sobre nuestros servicios o solicitar un
            servicio especial empresarial
          </p>
          <Link
            href="/pqrs"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Enviar PQRS
          </Link>
        </div>
      </section>
    </>
  );
}
