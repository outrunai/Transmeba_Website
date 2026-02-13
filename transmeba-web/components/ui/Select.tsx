'use client';

import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Componente Select integrado con React Hook Form mediante forwardRef.
 *
 * @example
 * <Select label="Tipo de Solicitud" options={requestTypes} {...register('requestType')} error={errors.requestType?.message} required />
 */

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Texto del label */
  label: string;
  /** Opciones del dropdown */
  options: SelectOption[];
  /** Mensaje de error de validación */
  error?: string;
  /** Texto placeholder para la primera opción */
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, placeholder, id, required, className, ...props }, ref) => {
    const selectId = id || props.name || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${selectId}-error`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label
          htmlFor={selectId}
          className="text-sm md:text-base font-medium text-secondary-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            className={`w-full px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 appearance-none bg-white cursor-pointer pr-10 ${
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : 'border-secondary-300 focus:border-primary-500 focus:ring-primary-500/20'
            } ${className || ''}`}
            {...props}
          >
            <option value="" disabled>
              {placeholder || 'Seleccione una opción'}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400 pointer-events-none" />
        </div>
        {error && (
          <p id={errorId} className="text-xs md:text-sm text-red-600 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
