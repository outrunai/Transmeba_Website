import { companyInfo } from '@/lib/data';
import { Calendar, Users as UsersIcon, MapPin } from 'lucide-react';

export default function HistorySection() {
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - companyInfo.foundedYear;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">
            Nuestra Historia
          </h2>
          <p className="text-lg md:text-xl text-primary-600 font-semibold">
            Más de {yearsOfService} años conectando comunidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Texto narrativo */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 md:p-8">
            <p className="text-base md:text-lg text-secondary-700 leading-relaxed">
              {companyInfo.history}
            </p>
          </div>

          {/* Datos clave */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <Calendar className="w-8 h-8 text-primary-500 mb-2" />
              <p className="text-sm text-secondary-600">Fundada en</p>
              <p className="text-2xl font-bold text-secondary-900">
                {companyInfo.foundedYear}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <UsersIcon className="w-8 h-8 text-primary-500 mb-2" />
              <p className="text-sm text-secondary-600">Empleados</p>
              <p className="text-2xl font-bold text-secondary-900">
                {companyInfo.employees}+
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <MapPin className="w-8 h-8 text-primary-500 mb-2" />
              <p className="text-sm text-secondary-600">Ruta Principal</p>
              <p className="text-lg font-bold text-secondary-900">
                {companyInfo.mainRoute}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
