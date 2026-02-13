import { z } from 'zod';

/**
 * Esquema de validación para formulario PQRS
 * Utiliza Zod para validación type-safe
 */
export const pqrsFormSchema = z.object({
  fullName: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),

  email: z
    .string()
    .email('Ingrese un correo electrónico válido')
    .toLowerCase(),

  phone: z
    .string()
    .min(7, 'El teléfono debe tener al menos 7 dígitos')
    .max(15, 'El teléfono no puede exceder 15 dígitos')
    .regex(/^[0-9+\s()-]+$/, 'El teléfono solo puede contener números y símbolos válidos'),

  requestType: z.enum(['peticion', 'queja', 'reclamo', 'sugerencia'], {
    message: 'Seleccione un tipo de solicitud válido',
  }),

  subject: z
    .string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(200, 'El asunto no puede exceder 200 caracteres'),

  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),

  acceptPrivacyPolicy: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Debe aceptar la política de privacidad para continuar',
    }),
});

/**
 * Tipo inferido del esquema de validación
 * Se puede usar en lugar de PQRSFormData para mayor consistencia
 */
export type PQRSFormInput = z.infer<typeof pqrsFormSchema>;
