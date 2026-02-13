import type {
  Service,
  Value,
  Certification,
  CompanyInfo
} from '@/types';

/**
 * Configuración de Strapi CMS
 *
 * INSTRUCCIONES PARA MIGRACIÓN FUTURA:
 *
 * 1. Crear las siguientes Content Types en Strapi:
 *    - Service (servicios)
 *    - Value (valores)
 *    - Certification (certificaciones)
 *    - CompanyInfo (información corporativa)
 *    - Route (rutas)
 *
 * 2. Configurar variables de entorno:
 *    - NEXT_PUBLIC_STRAPI_URL: URL del servidor Strapi
 *    - STRAPI_API_TOKEN: Token de autenticación (opcional)
 *
 * 3. Descomentar las funciones fetch a continuación
 *
 * 4. Reemplazar imports de lib/data.ts por estas funciones
 *
 * 5. Implementar revalidación con Next.js:
 *    - ISR (Incremental Static Regeneration)
 *    - On-demand revalidation con webhooks de Strapi
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

// Headers para peticiones a Strapi
const headers: HeadersInit = {
  'Content-Type': 'application/json',
  ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
};

/**
 * Función genérica para fetch a Strapi
 * @param endpoint - Endpoint de la API de Strapi
 * @param options - Opciones de fetch
 */
async function fetchStrapi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;

  const response = await fetch(url, {
    headers,
    ...options,
    next: { revalidate: 3600 }, // Revalidar cada hora
  });

  if (!response.ok) {
    throw new Error(`Strapi fetch error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

/**
 * FUNCIONES COMENTADAS PARA FUTURA IMPLEMENTACIÓN
 * Descomentar cuando Strapi esté configurado
 */

/*
export async function getServices(): Promise<Service[]> {
  const data = await fetchStrapi<{ data: any[] }>('/services?populate=*');

  return data.data.map((item) => ({
    id: item.id.toString(),
    title: item.attributes.title,
    description: item.attributes.description,
    icon: item.attributes.icon,
    features: item.attributes.features || [],
  }));
}

export async function getValues(): Promise<Value[]> {
  const data = await fetchStrapi<{ data: any[] }>('/values?populate=*');

  return data.data.map((item) => ({
    id: item.id.toString(),
    title: item.attributes.title,
    description: item.attributes.description,
    icon: item.attributes.icon,
  }));
}

export async function getCertifications(): Promise<Certification[]> {
  const data = await fetchStrapi<{ data: any[] }>('/certifications?populate=*');

  return data.data.map((item) => ({
    id: item.id.toString(),
    name: item.attributes.name,
    standard: item.attributes.standard,
    description: item.attributes.description,
    icon: item.attributes.icon,
    year: item.attributes.year,
  }));
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  const data = await fetchStrapi<{ data: any }>('/company-info?populate=*');

  return {
    name: data.data.attributes.name,
    foundedYear: data.data.attributes.foundedYear,
    originalName: data.data.attributes.originalName,
    mission: data.data.attributes.mission,
    vision: data.data.attributes.vision,
    history: data.data.attributes.history,
    employees: data.data.attributes.employees,
    mainRoute: data.data.attributes.mainRoute,
  };
}
*/

/**
 * ESTRATEGIA DE MIGRACIÓN PASO A PASO:
 *
 * FASE 1: Preparación de Strapi
 * - Instalar Strapi: npx create-strapi-app@latest strapi-cms
 * - Configurar base de datos (PostgreSQL recomendado para producción)
 * - Crear Content Types según interfaces de types/index.ts
 *
 * FASE 2: Migración de Datos
 * - Exportar datos de lib/data.ts y lib/constants.ts
 * - Importar datos a Strapi mediante API o interfaz administrativa
 * - Verificar integridad de datos
 *
 * FASE 3: Integración con Next.js
 * - Configurar variables de entorno (.env.local)
 * - Descomentar funciones fetch de este archivo
 * - Actualizar componentes para usar funciones de Strapi
 * - Implementar manejo de errores y estados de carga
 *
 * FASE 4: Optimización
 * - Configurar ISR (Incremental Static Regeneration)
 * - Implementar webhooks de Strapi para revalidación on-demand
 * - Configurar caché de Next.js
 * - Implementar fallbacks para cuando Strapi no esté disponible
 *
 * FASE 5: Testing y Deployment
 * - Probar en ambiente de desarrollo
 * - Probar en ambiente de staging
 * - Migrar a producción
 * - Monitorear rendimiento y errores
 */

export {};
