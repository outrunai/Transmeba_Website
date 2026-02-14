'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';
import { Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="hidden md:block bg-primary-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-end gap-6 text-sm">
          <a
            href="tel:+576041234567"
            className="flex items-center gap-2 hover:text-primary-100 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (604) 123-4567
          </a>
          <a
            href="mailto:info@transmeba.com.co"
            className="flex items-center gap-2 hover:text-primary-100 transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@transmeba.com.co
          </a>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '8px 16px',
        }}
      >
        <Link href="/" aria-label="Ir al inicio">
          <Image
            src="/logo/logo-transmeba.png"
            alt="Transmeba S.A. - Transporte Medellin Barbosa"
            width={200}
            height={65}
            priority
            style={{ height: '65px', width: 'auto' }}
          />
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
