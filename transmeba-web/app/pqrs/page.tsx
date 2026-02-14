import type { Metadata } from 'next';
import PQRSForm from '@/components/forms/PQRSForm';
import { contactInfo } from '@/lib/constants';
import { MessageSquare, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'PQRS - Peticiones, Quejas, Reclamos y Sugerencias | Transmeba S.A.',
  description:
    'Envíe sus peticiones, quejas, reclamos o sugerencias a Transmeba S.A. Nos comprometemos a responder en máximo 15 días hábiles.',
};

export default function PQRSPage() {
  return (
    <>
      {/* Hero simplificado */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <MessageSquare className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            PQRS
          </h1>
          <p className="text-lg md:text-xl text-secondary-600">
            Peticiones, Quejas, Reclamos y Sugerencias
          </p>
          <p className="text-base text-secondary-500 mt-2">
            Tu opinión nos ayuda a mejorar. Completa el formulario y nos
            comunicaremos contigo.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <PQRSForm />
          </div>
        </div>
      </section>

      {/* Otros canales de atención */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-secondary-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary-900 mb-8">
            Otros Canales de Atención
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Phone className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-secondary-800 mb-1">
                Teléfono
              </p>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Mail className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-secondary-800 mb-1">
                Correo Electrónico
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Clock className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <p className="text-sm font-semibold text-secondary-800 mb-1">
                Horario de Atención
              </p>
              <p className="text-xs text-secondary-600">
                {contactInfo.schedule}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
