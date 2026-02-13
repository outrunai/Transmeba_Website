This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Estructura de Datos

### Tipos TypeScript

Todas las interfaces están definidas en `types/index.ts`:
- `Service`: Servicios de transporte
- `Value`: Valores corporativos
- `Certification`: Certificaciones HSEQ
- `CompanyInfo`: Información de la empresa
- `Route`: Rutas de transporte
- `PQRSFormData`: Datos del formulario PQRS

### Datos Estáticos

Los datos de la empresa están en:
- `lib/data.ts`: Información corporativa, servicios, valores, rutas
- `lib/constants.ts`: Certificaciones, disclaimers legales, contacto

### Migración a Strapi CMS

El archivo `lib/strapi.ts` contiene:
- Funciones comentadas para fetch de datos desde Strapi
- Estrategia completa de migración en 5 fases
- Configuración de revalidación y caché

Para migrar a Strapi:
1. Configurar variables de entorno en `.env.local`
2. Crear Content Types en Strapi según interfaces
3. Descomentar funciones en `lib/strapi.ts`
4. Actualizar imports en componentes

### Validaciones

Los esquemas de validación Zod están en `lib/validations.ts`:
- `pqrsFormSchema`: Validación completa del formulario PQRS
- Mensajes de error en español
- Integración con React Hook Form
