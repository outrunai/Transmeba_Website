import { companyInfo } from '@/lib/data';
import { Target, Eye } from 'lucide-react';

export default function MissionVisionSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-secondary-50 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Misión */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-primary-500" />
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">
              Nuestra Misión
            </h3>
          </div>
          <p className="text-base md:text-lg text-secondary-700 leading-relaxed">
            {companyInfo.mission}
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-8 h-8 text-primary-500" />
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">
              Nuestra Visión
            </h3>
          </div>
          <p className="text-base md:text-lg text-secondary-700 leading-relaxed">
            {companyInfo.vision}
          </p>
        </div>
      </div>
    </section>
  );
}
