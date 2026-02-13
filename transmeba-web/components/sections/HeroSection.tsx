import Link from 'next/link';
import { companyInfo } from '@/lib/data';
import Button from '@/components/ui/Button';
import { MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4 text-primary-200">
          <MapPin className="w-5 h-5" />
          <span className="text-sm md:text-base font-medium">
            {companyInfo.mainRoute}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Conectando Medellín y Barbosa desde {companyInfo.foundedYear}
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Más de {new Date().getFullYear() - companyInfo.foundedYear} años
          brindando un servicio de transporte seguro, confiable y de calidad
          para nuestra región.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/servicios">
            <Button variant="primary" size="lg">
              Conoce Nuestros Servicios
            </Button>
          </Link>
          <Link href="/pqrs">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contáctanos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
