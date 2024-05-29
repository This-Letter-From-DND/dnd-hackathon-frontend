import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
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

export const QuestionResultCardContainer = styled.div`
  margin-bottom: 20px;
`;

export const SortContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

export const AllowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.input`
  margin-right: 4px;
  cursor: pointer;
`;
