import type {
  CompanyInfo,
  Service,
  Value,
  Route,
  RequestType
} from '@/types';

// Información corporativa de Transmeba S.A.
export const companyInfo: CompanyInfo = {
  name: 'Transmeba S.A.',
  foundedYear: 1972,
  originalName: 'Transportes Abel Agudelo Ltda.',
  employees: 120,
  mainRoute: 'Medellín - Barbosa',

  mission: 'Prestamos servicio de transporte público ágil y seguro, con personal capacitado y comprometido, contribuyendo al desarrollo sostenible de la región y garantizando la satisfacción de nuestros usuarios mediante el cumplimiento de los más altos estándares de calidad, seguridad vial y responsabilidad ambiental.',

  vision: 'Ser la empresa líder en Antioquia en transporte público intermunicipal, reconocida por su excelencia en el servicio, innovación tecnológica, compromiso con la seguridad vial y la sostenibilidad ambiental, siendo referente en la implementación de sistemas integrados de gestión.',

  history: 'Fundada el 1 de febrero de 1972 como Transportes Abel Agudelo Ltda., nuestra empresa nació con el propósito de conectar a Medellín con el municipio de Barbosa. A lo largo de más de 50 años de trayectoria, hemos evolucionado hasta convertirnos en Transmeba S.A., una organización moderna y comprometida con la calidad del servicio. Hoy contamos con una flota renovada, personal altamente capacitado y certificaciones internacionales que respaldan nuestro compromiso con la excelencia operacional y la seguridad de nuestros pasajeros.',
};

// Servicios de transporte
export const services: Service[] = [
  {
    id: 'transporte-metropolitano',
    title: 'Transporte Metropolitano',
    description: 'Servicio regular de transporte público entre Medellín y Barbosa, con frecuencias constantes durante todo el día.',
    icon: 'Bus',
    features: [
      'Rutas frecuentes cada 15-20 minutos',
      'Flota moderna y confortable',
      'Tarifas accesibles',
      'Cumplimiento de horarios',
      'Personal capacitado',
      'Vehículos con revisión técnico-mecánica vigente',
    ],
  },
  {
    id: 'servicio-especial-empresarial',
    title: 'Servicio Especial Empresarial',
    description: 'Soluciones de transporte personalizado para empresas, con rutas y horarios adaptados a sus necesidades operativas.',
    icon: 'Briefcase',
    features: [
      'Rutas personalizadas',
      'Horarios flexibles',
      'Vehículos exclusivos',
      'Conductores certificados',
      'Seguimiento GPS en tiempo real',
      'Facturación corporativa',
    ],
  },
];

// Valores corporativos
export const values: Value[] = [
  {
    id: 'honestidad',
    title: 'Honestidad',
    description: 'Actuamos con transparencia e integridad en todas nuestras operaciones, generando confianza en nuestros usuarios y colaboradores.',
    icon: 'Shield',
  },
  {
    id: 'respeto',
    title: 'Respeto',
    description: 'Valoramos la dignidad de cada persona, promoviendo un ambiente de cordialidad y consideración mutua.',
    icon: 'Heart',
  },
  {
    id: 'responsabilidad',
    title: 'Responsabilidad',
    description: 'Cumplimos nuestros compromisos con excelencia, asumiendo las consecuencias de nuestras acciones y decisiones.',
    icon: 'CheckCircle',
  },
  {
    id: 'trabajo-equipo',
    title: 'Trabajo en Equipo',
    description: 'Colaboramos activamente para alcanzar objetivos comunes, aprovechando las fortalezas de cada miembro de nuestra organización.',
    icon: 'Users',
  },
];

// Rutas principales
export const routes: Route[] = [
  {
    id: 'medellin-barbosa',
    origin: 'Medellín (Terminal del Norte)',
    destination: 'Barbosa (Terminal Municipal)',
    frequency: 'Cada 15-20 minutos',
    duration: '45 minutos aproximadamente',
  },
  {
    id: 'barbosa-medellin',
    origin: 'Barbosa (Terminal Municipal)',
    destination: 'Medellín (Terminal del Norte)',
    frequency: 'Cada 15-20 minutos',
    duration: '45 minutos aproximadamente',
  },
];

// Tipos de solicitud PQRS
export const requestTypes: RequestType[] = [
  { value: 'peticion', label: 'Petición' },
  { value: 'queja', label: 'Queja' },
  { value: 'reclamo', label: 'Reclamo' },
  { value: 'sugerencia', label: 'Sugerencia' },
];
