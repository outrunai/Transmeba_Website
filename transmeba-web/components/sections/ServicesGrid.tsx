import { services } from '@/lib/data';
import Card from '@/components/ui/Card';
import { Check } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-secondary-900">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            >
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-secondary-700"
                  >
                    <Check className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
