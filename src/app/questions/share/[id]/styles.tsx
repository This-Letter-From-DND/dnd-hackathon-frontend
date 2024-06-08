import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/ShareBackground.svg');
  background-size: cover;
`;

export const ContentContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 0rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuestionCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
