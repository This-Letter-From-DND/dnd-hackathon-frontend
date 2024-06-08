import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const ToastContainer = styled.div`
  width: ${(props) => props.theme.layout.minWidth.mobile};
  position: relative;
`;

export const Content = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  right: 24px;
  width: 380px;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding: 14px 12px;
  border-radius: 8px;
  transform: translateX(100%);
  animation: ${({ $isVisible }) => ($isVisible ? slideIn : slideOut)} 0.5s
    forwards;
`;
