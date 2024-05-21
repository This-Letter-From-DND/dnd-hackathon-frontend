import { useCallback, useState } from 'react';

function useForm<T>(initialForm: T) {
  const [formData, setForm] = useState<T>(initialForm);

  const onReset = useCallback((name: keyof T) => {
    setForm((prevState) => ({ ...prevState, [name]: '' }));
  }, []);

  const onChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = event.target;
      setForm((prevState) => ({ ...prevState, [name]: value }));
    },
    [],
  );

  return {
    formData,
    onChange,
    onReset,
  };
}

export default useForm;
