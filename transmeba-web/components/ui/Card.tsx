'use client';

import {
  Bus,
  Briefcase,
  Award,
  Leaf,
  ShieldCheck,
  Shield,
  Heart,
  CheckCircle,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Componente Card para mostrar servicios, valores y certificaciones.
 *
 * @example
 * <Card icon="Bus" title="Transporte Metropolitano" description="Servicio regular entre Medellín y Barbosa" />
 */

interface CardProps {
  /** Título de la tarjeta */
  title?: string;
  /** Descripción de la tarjeta */
  description?: string;
  /** Nombre del icono de Lucide React */
  icon?: string;
  /** Contenido adicional */
  children?: React.ReactNode;
  /** Clases CSS adicionales */
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Bus,
  Briefcase,
  Award,
  Leaf,
  ShieldCheck,
  Shield,
  Heart,
  CheckCircle,
  Users,
};

export default function Card({
  title,
  description,
  icon,
  children,
  className,
}: CardProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 ${className || ''}`}
    >
      {IconComponent && (
        <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-primary-500 mx-auto mb-4" />
      )}
      {title && (
        <h3 className="text-lg md:text-xl font-bold text-secondary-900 mb-2 text-center">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm md:text-base text-secondary-600 text-center">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
