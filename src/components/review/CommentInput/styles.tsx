import styled from 'styled-components';

export const CommentInputStyle = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  padding: 22px 24px 50px 24px;
  background: #ffffff;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 38px;
  border: none;
  padding-right: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const Button = styled.button`
  width: 65px;
  height: 38px;
  background-color: #adb5bd;
  border-radius: 0.5rem;
  color: #ffffff;
  border: none;
`;
