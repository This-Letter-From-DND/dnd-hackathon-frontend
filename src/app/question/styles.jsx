import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  height: 100%;
`;

export const Point = styled.div`
  height: 3rem;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 202, 12, 0.12);
  margin-bottom: 1.5rem;
`;

export const PointTitle = styled.span`
  color: #db9900;
`;

export const ContentContainer = styled.div`
  margin: 0rem 1.5rem;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.span`
  margin-left: 0.5rem;
  color: #db9900;
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

export const InputTitle = styled.input`
  width: 100%;
  height: 3.25rem;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.neutral[800]};
  color: ${(props) => props.theme.font.colors.white};
`;

export const Textarea = styled.textarea`
  width: 100%;
  margin-top: 0.75rem;
  height: 8.7rem;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.neutral[800]};
  color: ${(props) => props.theme.font.colors.white};
`;

export const TitleStyled = styled.span`
  color: ${(props) => props.theme.colors.neutral[900]};
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
`;
