import { certifications } from '@/lib/constants';
import Card from '@/components/ui/Card';

export default function HSEQSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Certificaciones y Sistemas de Gestión
          </h2>
          <p className="text-base md:text-lg text-secondary-600 max-w-3xl mx-auto">
            Nuestro compromiso con la calidad, el medio ambiente y la seguridad
            vial está respaldado por certificaciones internacionales que
            garantizan la excelencia de nuestras operaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              icon={cert.icon}
              title={cert.name}
              description={cert.description}
            >
              <div className="mt-4 pt-4 border-t border-secondary-200">
                <p className="text-sm font-semibold text-primary-600">
                  {cert.standard}
                </p>
                {cert.year && (
                  <p className="text-xs text-secondary-500 mt-1">
                    Certificada desde {cert.year}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
