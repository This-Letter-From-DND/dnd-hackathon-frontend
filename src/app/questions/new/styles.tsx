import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;

export const Point = styled.div`
  height: 3rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 202, 12, 0.12);
`;

export const ContentContainer = styled.div`
  margin: 0rem 1.5rem;
  flex-grow: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    margin-right: 5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.span`
  margin-left: 0.5rem;
`;

export const InputTitle = styled.input`
  width: 100%;
  height: 3.25rem;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors[100]};
`;

export const TextareaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 8.75rem;
  margin-top: 0.75rem;
  height: 8.7rem;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors[100]};
`;

export const CharacterCount = styled.div<{ $isLimitExceeded: boolean }>`
  text-align: right;
  font-size: 14px;
  color: ${(props) =>
    props.$isLimitExceeded
      ? props.theme.colors.error
      : props.theme.colors[500]};
  margin-top: 5px;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;

export const ButtonContainer = styled.div`
  margin: 1.5rem;
  flex-shrink: 0;
`;
