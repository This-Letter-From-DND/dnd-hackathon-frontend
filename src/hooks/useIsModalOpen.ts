import { useEffect, useState } from 'react';

export default function useIsModalOpen(isModalOpen: boolean, delay: number) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isModalOpen) {
      setIsOpen(true);
    } else {
      timer = setTimeout(() => setIsOpen(false), delay);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isModalOpen, delay]);

  return isOpen;
}
