import styled from 'styled-components';

interface ContainerStyledProps {
  $marginTop: string;
}

export const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerStyled = styled.div<ContainerStyledProps>`
  margin-top: calc(${(props) => props.$marginTop});
`;

export const BananaCountStyled = styled.div`
  background-color: ${(props) => props.theme.colors[900]};
  padding: 10px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors[100]};
  gap: 4px;
`;

export const SkipStyled = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  width: 380px;
  min-height: 315px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors[300]};
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 200px;
  border-bottom: 1px solid ${(props) => props.theme.colors[300]};
  background-color: ${(props) => props.theme.colors.white};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 24px;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 20px 10px;
    width: 190px;
    min-height: 115px;
    border: 1px solid ${(props) => props.theme.colors[300]};
    background-color: ${(props) => props.theme.colors.white};
    border: none;

    &.left {
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
      border-right: 0.5px solid ${(props) => props.theme.colors[300]};
    }
    &.right {
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      border-left: 0.5px solid ${(props) => props.theme.colors[300]};
    }
  }
`;

export const TransparentButtonContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 50px;
  width: 380px;
  display: flex;

  > button {
    flex-grow: 1;
    min-height: 115px;
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const FooterContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const AddQuestion = styled.div`
  position: absolute;
  left: 54px;
  bottom: 108px;
  width: 136px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  border-radius: 100px;

  > span {
    padding-bottom: 0.25rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
