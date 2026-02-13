'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/pqrs', label: 'PQRS' },
];

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={className}>
      {/* Botón hamburguesa - solo móvil */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-secondary-700 hover:text-primary-500 transition-colors"
        aria-label="Abrir menú de navegación"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Menú móvil - overlay fullscreen */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-secondary-700 hover:text-primary-500 transition-colors"
            aria-label="Cerrar menú de navegación"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl transition-colors ${
                pathname === link.href
                  ? 'text-primary-500 font-semibold'
                  : 'text-secondary-700 hover:text-primary-500'
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Menú desktop - horizontal */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-base transition-colors pb-1 ${
              pathname === link.href
                ? 'text-primary-500 font-semibold border-b-2 border-primary-500'
                : 'text-secondary-700 hover:text-primary-500'
            }`}
            aria-current={pathname === link.href ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
