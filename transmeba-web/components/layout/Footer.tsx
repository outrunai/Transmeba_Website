import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function Footer() {
  const shortHistory =
    companyInfo.history.length > 150
      ? companyInfo.history.substring(0, 150) + '...'
      : companyInfo.history;

  return (
    <footer>
      {/* Contenido principal del footer */}
      <div className="bg-secondary-800 text-white py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Columna 1: Sobre Nosotros */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">
              Sobre Transmeba
            </h3>
            <p className="text-secondary-300 text-sm leading-relaxed">
              {shortHistory}
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/nosotros', label: 'Nosotros' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/pqrs', label: 'PQRS' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-secondary-300 text-sm">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                Medellín - Barbosa, Antioquia
              </li>
              <li className="flex items-start gap-3 text-secondary-300 text-sm">
                <Phone className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+576041234567"
                  className="hover:text-primary-400 transition-colors"
                >
                  (604) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-300 text-sm">
                <Mail className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:info@transmeba.com.co"
                  className="hover:text-primary-400 transition-colors"
                >
                  info@transmeba.com.co
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-300 text-sm">
                <Clock className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                Lun - Dom: 5:00 AM - 10:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="bg-primary-600 text-white text-center py-4 px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Transmeba S.A. | Conectando
          Medellín y Barbosa desde 1972
        </p>
      </div>
    </footer>
  );
}
