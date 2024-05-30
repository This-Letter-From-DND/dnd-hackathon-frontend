import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.25rem 0rem 2rem 0rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.5rem 0rem 1.5rem;
`;
export const Form = styled.div`
  width: 100%;
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

export const ButtonContainer = styled.div`
  width: 100%;
  padding-bottom: 1rem;
`;
