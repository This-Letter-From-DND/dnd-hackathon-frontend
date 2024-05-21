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
  background-color: #212529;
  padding: 10px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  color: #f1f3f5;
  gap: 4px;
  .mgr_4 {
    margin-right: 4px;
  }
  .count {
    color: #db9900;
  }
`;

export const SkipStyled = styled.div`
  color: #495057;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const Card = styled.div`
  width: 380px;
  min-height: 315px;
  border-radius: 24px;
  border: 1px solid #dee2e6;
  background-color: #ffffff;
  color: black;
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
  border-bottom: 1px solid #dee2e6;
  background-color: #ffffff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 24px;
  .card-title {
    color: #212529;
    font-weight: ${(props) => props.theme.font.fontStyle.bold};
  }
  .card-description {
    color: #495057;
    font-weight: ${(props) => props.theme.font.fontStyle.medium};
  }
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
    border: 1px solid #dee2e6;
    background-color: #ffffff;
    color: #212529;
    border: none;
    .card-title {
      color: #212529;
      font-size: 24px;
      font-weight: ${(props) => props.theme.font.fontStyle.bold};
    }
    .card-description {
      color: #495057;
      font-weight: ${(props) => props.theme.font.fontStyle.medium};
      word-break: break-all;
    }
    &.left {
      border-top-left-radius: 24px;
      border-bottom-left-radius: 24px;
      border-right: 0.5px solid #dee2e6;
    }
    &.right {
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      border-left: 0.5px solid #dee2e6;
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
  justify-content: center;
  align-items: center;
  background-color: #ffca0c;
  padding: 16px;
  gap: 8px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
