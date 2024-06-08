import { useState, useCallback, ReactNode } from 'react';

const useToast = () => {
  const [toastContent, setToastContent] = useState<ReactNode | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showToast = useCallback(
    (content: ReactNode, duration: number = 3000) => {
      setToastContent(content);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setToastContent(null);
      }, duration);
    },
    [],
  );

  return { toastContent, isVisible, showToast };
};

export default useToast;
