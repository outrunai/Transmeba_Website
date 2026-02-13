import type { Certification, LegalDisclaimer } from '@/types';

// Certificaciones HSEQ (Health, Safety, Environment, Quality)
export const certifications: Certification[] = [
  {
    id: 'iso-9001',
    name: 'Sistema de Gestión de Calidad',
    standard: 'ISO 9001:2015',
    description: 'Certificación internacional que garantiza la calidad en nuestros procesos operativos y administrativos, asegurando la satisfacción continua de nuestros usuarios.',
    icon: 'Award',
    year: 2018,
  },
  {
    id: 'iso-14001',
    name: 'Sistema de Gestión Ambiental',
    standard: 'ISO 14001:2015',
    description: 'Compromiso con la protección del medio ambiente mediante la gestión responsable de nuestros recursos y la reducción del impacto ambiental de nuestras operaciones.',
    icon: 'Leaf',
    year: 2019,
  },
  {
    id: 'iso-39001',
    name: 'Sistema de Gestión de Seguridad Vial',
    standard: 'ISO 39001:2012',
    description: 'Certificación que respalda nuestro compromiso con la seguridad vial, implementando las mejores prácticas para proteger la vida de nuestros pasajeros, conductores y demás actores viales.',
    icon: 'ShieldCheck',
    year: 2020,
  },
];

// Disclaimers legales para PQRS
export const legalDisclaimers: LegalDisclaimer[] = [
  {
    id: 'privacy-policy',
    title: 'Política de Privacidad y Protección de Datos Personales',
    type: 'privacy',
    content: 'De conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013, Transmeba S.A. informa que los datos personales suministrados a través de este formulario serán tratados de manera confidencial y utilizados exclusivamente para dar respuesta a su solicitud. Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales, así como a revocar la autorización otorgada para su tratamiento. Para ejercer estos derechos, puede contactarnos a través de nuestros canales oficiales de atención.',
  },
  {
    id: 'lost-items',
    title: 'Política de Objetos Perdidos',
    type: 'lost-items',
    content: 'Transmeba S.A. no se hace responsable por objetos personales olvidados o perdidos al interior de los vehículos. En caso de extravío, el usuario debe reportar el incidente de inmediato en nuestras oficinas administrativas o a través de nuestros canales de atención, proporcionando la mayor cantidad de detalles posible (fecha, hora, ruta, descripción del objeto). La empresa realizará las gestiones pertinentes para la búsqueda del objeto, sin embargo, no garantiza su recuperación.',
  },
  {
    id: 'response-time',
    title: 'Tiempo de Respuesta',
    type: 'general',
    content: 'Transmeba S.A. se compromete a dar respuesta a su solicitud en un plazo máximo de 15 días hábiles, contados a partir de la fecha de radicación. En caso de requerir información adicional para atender su solicitud, nos comunicaremos con usted a través de los datos de contacto proporcionados.',
  },
];

// Información de contacto
export const contactInfo = {
  phone: '+57 (4) 444 5555',
  email: 'atencioncliente@transmeba.com.co',
  address: 'Calle 50 # 45-30, Medellín, Antioquia',
  schedule: 'Lunes a Viernes: 6:00 AM - 8:00 PM | Sábados: 7:00 AM - 6:00 PM | Domingos: 8:00 AM - 4:00 PM',
  socialMedia: {
    facebook: 'https://facebook.com/transmebasa',
    instagram: 'https://instagram.com/transmebasa',
    twitter: 'https://twitter.com/transmebasa',
  },
};

// Navegación del sitio
export const navigationLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/pqrs', label: 'PQRS' },
];
