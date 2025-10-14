import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'file';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  validation?: (value: string) => string | null;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string | File>) => void;
  submitLabel?: string;
  className?: string;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit, submitLabel = 'Submit', className = '' }) => {
  const [formData, setFormData] = useState<Record<string, string | File>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: FormField, value: string | File) => {
    if (field.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return `${field.label} is required`;
    }

    if (field.type === 'email' && typeof value === 'string' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (field.type === 'tel' && typeof value === 'string' && value) {
      const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        return 'Please enter a valid phone number';
      }
    }

    if (field.validation && typeof value === 'string') {
      return field.validation(value);
    }

    return null;
  };

  const handleChange = (fieldId: string, value: string | File) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    
    const field = fields.find(f => f.id === fieldId);
    if (field) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [fieldId]: error || '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    fields.forEach(field => {
      const value = formData[field.id] || '';
      const error = validateField(field, value);
      if (error) {
        newErrors[field.id] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await onSubmit(formData);
    }

    setIsSubmitting(false);
  };

  const renderField = (field: FormField) => {
    const value = formData[field.id] || '';
    const error = errors[field.id];

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.id}
            value={value as string}
            onChange={(e) => handleChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4BA3FF] focus:border-transparent transition-colors duration-300 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
      
      case 'select':
        return (
          <select
            id={field.id}
            value={value as string}
            onChange={(e) => handleChange(field.id, e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4BA3FF] focus:border-transparent transition-colors duration-300 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      
      case 'file':
        return (
          <input
            type="file"
            id={field.id}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleChange(field.id, file);
            }}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4BA3FF] focus:border-transparent transition-colors duration-300 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
      
      default:
        return (
          <input
            type={field.type}
            id={field.id}
            value={value as string}
            onChange={(e) => handleChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4BA3FF] focus:border-transparent transition-colors duration-300 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {fields.map(field => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          {renderField(field)}
          {errors[field.id] && (
            <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
              <AlertCircle size={16} />
              <span>{errors[field.id]}</span>
            </div>
          )}
        </div>
      ))}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : submitLabel}
      </button>
    </form>
  );
};

export default Form;