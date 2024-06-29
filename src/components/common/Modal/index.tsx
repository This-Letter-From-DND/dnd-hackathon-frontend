import React, { MouseEvent, ReactNode } from 'react';

import useIsModalOpen from '@/hooks/useIsModalOpen';

import {
  ModalWrapper,
  ModalContainer,
  ModalSection,
  ModalMain,
} from './styles';

interface ModalProps {
  isModalOpen: boolean;
  onClick: () => void;
  children: ReactNode;
}

export default function Modal({ isModalOpen, onClick, children }: ModalProps) {
  const isOpen = useIsModalOpen(isModalOpen, 100);
  if (!isOpen) return null;

  const handleClickInsideModal = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <ModalWrapper
      $isOpen={isOpen}
      onClick={onClick}
    >
      <ModalContainer onClick={handleClickInsideModal}>
        <ModalSection $isOpen={isModalOpen}>
          <ModalMain>{children}</ModalMain>
        </ModalSection>
      </ModalContainer>
    </ModalWrapper>
  );
}
