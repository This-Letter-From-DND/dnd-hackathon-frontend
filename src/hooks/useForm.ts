import { useCallback, useState } from 'react';

type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K]) => string | null;
};

function useForm<T>(initialForm: T, validationRules?: ValidationRules<T>) {
  const [formData, setForm] = useState<T>(initialForm);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string | null }>({});

  const validateField = useCallback(
    (name: keyof T, value: T[keyof T]) => {
      if (validationRules && validationRules[name]) {
        const error = validationRules[name]?.(value) ?? null;
        setErrors((prevState) => ({ ...prevState, [name]: error }));
      }
    },
    [validationRules],
  );

  const onReset = useCallback(
    (name: keyof T) => {
      setForm((prevState) => ({ ...prevState, [name]: initialForm[name] }));
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
      setForm((prevState) => ({ ...prevState, [name]: value }));
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
            validationRules[key as keyof T]?.(formData[key as keyof T]) ?? null;
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
    validateForm,
  };
}

export default useForm;
