import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 25px;
  display: flex;
  flex-direction: column;

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

export const QuestionCardContainer = styled.div`
  margin-bottom: 20px;
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Button = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  width: 89px;
  height: 38px;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
