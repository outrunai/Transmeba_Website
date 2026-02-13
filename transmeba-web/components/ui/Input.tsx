'use client';

import { forwardRef } from 'react';

/**
 * Componente Input integrado con React Hook Form mediante forwardRef.
 *
 * @example
 * <Input label="Nombre Completo" {...register('fullName')} error={errors.fullName?.message} required />
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Texto del label */
  label: string;
  /** Mensaje de error de validación */
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, required, className, ...props }, ref) => {
    const inputId = id || props.name || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor={inputId}
          className="text-sm md:text-base font-medium text-secondary-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-secondary-300 focus:border-primary-500 focus:ring-primary-500/20'
          } ${className || ''}`}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs md:text-sm text-red-600 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
