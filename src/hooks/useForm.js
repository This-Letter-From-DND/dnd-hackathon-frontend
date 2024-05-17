import { useCallback, useState } from 'react';

function useForm(initialForm) {
  const [formData, setForm] = useState(initialForm);

  const onReset = useCallback((name) => {
    setForm((prevState) => ({ ...prevState, [name]: '' }));
  }, []);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return {
    formData,
    onChange,
    onReset,
  };
}

export default useForm;
