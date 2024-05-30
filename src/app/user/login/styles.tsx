import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0rem 1.5rem 0rem 1.5rem;
`;

export const ImageContainer = styled.div`
  margin: 1.25rem 0rem 2.5rem 0rem;
`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 1.5rem 0rem 2.5rem 0rem;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;

  :last-child {
    margin-top: 0.5rem;
    text-decoration: underline;
    cursor: pointer;
  }
`;
