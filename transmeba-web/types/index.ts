// Interfaz para servicios de transporte
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Nombre del icono de Lucide React
  features: string[];
}

// Interfaz para valores corporativos
export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Interfaz para certificaciones HSEQ
export interface Certification {
  id: string;
  name: string;
  standard: string; // ISO 9001, ISO 14001, ISO 39001
  description: string;
  icon: string;
  year?: number; // Año de certificación
}

// Interfaz para información de la empresa
export interface CompanyInfo {
  name: string;
  foundedYear: number;
  originalName: string;
  mission: string;
  vision: string;
  history: string;
  employees: number;
  mainRoute: string;
}

// Interfaz para rutas de transporte
export interface Route {
  id: string;
  origin: string;
  destination: string;
  frequency: string;
  duration: string;
}

// Interfaz para formulario PQRS
export interface PQRSFormData {
  fullName: string;
  email: string;
  phone: string;
  requestType: 'peticion' | 'queja' | 'reclamo' | 'sugerencia';
  subject: string;
  message: string;
  acceptPrivacyPolicy: boolean;
}

// Interfaz para tipos de solicitud PQRS
export interface RequestType {
  value: string;
  label: string;
}

// Interfaz para disclaimers legales
export interface LegalDisclaimer {
  id: string;
  title: string;
  content: string;
  type: 'privacy' | 'lost-items' | 'general';
}
