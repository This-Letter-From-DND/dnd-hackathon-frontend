import { useCallback, useState } from 'react';

type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K], allValues?: T) => string | null;
};

function useForm<T>(initialForm: T, validationRules?: ValidationRules<T>) {
  const [formData, setFormData] = useState<T>(initialForm);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string | null }>({});

  const validateField = useCallback(
    (name: keyof T, value: T[keyof T]) => {
      if (validationRules && validationRules[name]) {
        const error = validationRules[name]?.(value, formData) ?? null;
        setErrors((prevState) => ({ ...prevState, [name]: error }));
      }
    },
    [validationRules, formData],
  );

  const onReset = useCallback(
    (name: keyof T) => {
      setFormData((prevState) => ({ ...prevState, [name]: initialForm[name] }));
      setErrors((prevState) => ({ ...prevState, [name]: null }));
    },
    [initialForm],
  );

  const onChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
      validateField(name as keyof T, value as T[keyof T]);
    },
    [validateField],
  );

  const validateForm = useCallback((): boolean => {
    if (validationRules) {
      let isValid = true;
      const newErrors: { [K in keyof T]?: string | null } = {};

      for (const key in formData) {
        if (Object.prototype.hasOwnProperty.call(formData, key)) {
          const error =
            validationRules[key as keyof T]?.(
              formData[key as keyof T],
              formData,
            ) ?? null;
          if (error) {
            isValid = false;
            newErrors[key as keyof T] = error;
          }
        }
      }
      setErrors(newErrors);
      return isValid;
    }
    return true;
  }, [formData, validationRules]);

  return {
    formData,
    errors,
    onChange,
    onReset,
    setFormData,
    validateForm,
  };
}

export default useForm;
