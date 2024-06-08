import React from 'react';

import { Button, ButtonGroup, Content, ContentContainer } from './styles';

import Modal from '..';
import Font from '../../Font';

interface ConfirmModalProps {
  isModalOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export default function ConfirmModal({
  isModalOpen,
  onConfirm,
  onCancel,
  message,
}: ConfirmModalProps) {
  return (
    <Modal
      isModalOpen={isModalOpen}
      onClick={onCancel}
    >
      <ContentContainer>
        <Content>{message}</Content>
        <ButtonGroup>
          <Button onClick={onCancel}>
            <Font fontWeight='bold'>취소</Font>
          </Button>
          <Button onClick={onConfirm}>
            <Font
              color='secondary'
              fontWeight='bold'
            >
              확인
            </Font>
          </Button>
        </ButtonGroup>
      </ContentContainer>
    </Modal>
  );
}
