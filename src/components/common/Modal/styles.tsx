import styled, { keyframes } from 'styled-components';

const modalBgOpened = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalBgClosed = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const modalOpened = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const modalClosed = keyframes`
  from {
    margin-bottom: 0px;
  }
  to {
    margin-bottom: -50px;
  }
`;

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${({ isOpen }) => (isOpen ? modalBgOpened : modalBgClosed)} 0.1s;
`;

export const ModalContainer = styled.div`
  width: ${(props) => props.theme.layout.minWidth.mobile};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.layout.minWidth.mobile};
`;

export const ModalSection = styled.section<{ isOpen: boolean }>`
  width: 260px;
  height: 164px;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.white};
  animation: ${({ isOpen }) => (isOpen ? modalOpened : modalClosed)} 0.1s;
`;

export const ModalMain = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  border-top: 1px solid gray;
  color: black;

  &::-webkit-scrollbar {
    width: 6px;
    margin-right: 5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;

    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;
