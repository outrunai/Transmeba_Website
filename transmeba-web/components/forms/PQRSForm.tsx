'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { pqrsFormSchema } from '@/lib/validations';
import type { PQRSFormData } from '@/types';
import { requestTypes } from '@/lib/data';
import { legalDisclaimers } from '@/lib/constants';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';

export default function PQRSForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PQRSFormData>({
    resolver: zodResolver(pqrsFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      requestType: '' as PQRSFormData['requestType'],
      subject: '',
      message: '',
      acceptPrivacyPolicy: false,
    },
  });

  const onSubmit = async (data: PQRSFormData) => {
    setSubmitError('');
    setIsSuccess(false);

    try {
      // TODO: Reemplazar con llamada real a API cuando esté disponible
      // const response = await fetch('/api/pqrs', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
      reset();
    } catch {
      setSubmitError(
        'Ocurrió un error al enviar su solicitud. Por favor, intente nuevamente.'
      );
    }
  };

  const privacyDisclaimer = legalDisclaimers.find((d) => d.type === 'privacy');
  const lostItemsDisclaimer = legalDisclaimers.find(
    (d) => d.type === 'lost-items'
  );
  const responseTimeDisclaimer = legalDisclaimers.find(
    (d) => d.type === 'general'
  );

  // Mensaje de éxito
  if (isSuccess) {
    return (
      <div
        className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 text-center"
        role="alert"
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">
          ¡Solicitud enviada exitosamente!
        </h3>
        <p className="text-green-700">
          Nos comunicaremos contigo en máximo 15 días hábiles.
        </p>
        <Button
          variant="primary"
          size="md"
          className="mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Error de envío */}
        {submitError && (
          <div
            className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3"
            role="alert"
          >
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{submitError}</p>
          </div>
        )}

        {/* Campos del formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Input
            label="Nombre Completo"
            type="text"
            placeholder="Ingrese su nombre completo"
            required
            {...register('fullName')}
            error={errors.fullName?.message}
          />

          <Input
            label="Correo Electrónico"
            type="email"
            placeholder="ejemplo@correo.com"
            required
            {...register('email')}
            error={errors.email?.message}
          />

          <Input
            label="Teléfono"
            type="tel"
            placeholder="+57 300 000 0000"
            required
            {...register('phone')}
            error={errors.phone?.message}
          />

          <Select
            label="Tipo de Solicitud"
            options={requestTypes}
            placeholder="Seleccione el tipo de solicitud"
            required
            {...register('requestType')}
            error={errors.requestType?.message}
          />

          <div className="md:col-span-2">
            <Input
              label="Asunto"
              type="text"
              placeholder="Describa brevemente su solicitud"
              required
              {...register('subject')}
              error={errors.subject?.message}
            />
          </div>

          {/* Textarea para mensaje */}
          <div className="md:col-span-2 flex flex-col gap-1.5 w-full">
            <label
              htmlFor="message"
              className="text-sm md:text-base font-medium text-secondary-700"
            >
              Mensaje
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Describa detalladamente su petición, queja, reclamo o sugerencia"
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 resize-vertical ${
                errors.message
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                  : 'border-secondary-300 focus:border-primary-500 focus:ring-primary-500/20'
              }`}
              {...register('message')}
            />
            {errors.message && (
              <p id="message-error" className="text-xs md:text-sm text-red-600 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {/* Disclaimer de privacidad */}
        {privacyDisclaimer && (
          <div className="mt-6 bg-secondary-50 border border-secondary-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-secondary-800 mb-2">
              {privacyDisclaimer.title}
            </h4>
            <p className="text-xs text-secondary-600 leading-relaxed">
              {privacyDisclaimer.content}
            </p>
          </div>
        )}

        {/* Checkbox de privacidad */}
        <div className="mt-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 rounded border-secondary-300 text-primary-500 focus:ring-primary-500"
              {...register('acceptPrivacyPolicy')}
            />
            <span className="text-sm text-secondary-700">
              Acepto la Política de Privacidad y Protección de Datos Personales
              <span className="text-red-500 ml-1">*</span>
            </span>
          </label>
          {errors.acceptPrivacyPolicy && (
            <p className="text-xs md:text-sm text-red-600 mt-1 ml-7">
              {errors.acceptPrivacyPolicy.message}
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <div className="mt-8">
          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar Solicitud
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Disclaimers adicionales */}
      <div className="mt-8 space-y-4">
        {lostItemsDisclaimer && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="text-sm font-semibold text-yellow-800 mb-1">
              {lostItemsDisclaimer.title}
            </h4>
            <p className="text-xs text-yellow-700 leading-relaxed">
              {lostItemsDisclaimer.content}
            </p>
          </div>
        )}

        {responseTimeDisclaimer && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 className="text-sm font-semibold text-blue-800 mb-1">
              {responseTimeDisclaimer.title}
            </h4>
            <p className="text-xs text-blue-700 leading-relaxed">
              {responseTimeDisclaimer.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
